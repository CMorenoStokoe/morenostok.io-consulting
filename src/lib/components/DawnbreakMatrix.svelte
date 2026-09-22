<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	let canvasEl: HTMLCanvasElement;
	let animId: number | null = null;
	let loadListener: (() => void) | null = null;
	let startTime = 0;
	const DURATION_MS = 3600; // 3.6s dawnbreak sweep cycle

	const SVG_PATH_D =
		'M64.4538 66.3802L188.071 217.777L102.419 194.164L182.052 238.611L22.785 254.353L180.2 270.094L108.9 314.541L176.496 292.317C98.7148 386.767 67.2317 458.067 67.2317 458.067C221.406 265.927 325.578 178.423 457.066 68.2321C457.066 68.2321 367.71 114.994 289.465 179.349L314.929 106.66L264.927 185.368L251.5 25.6374L234.833 186.757L190.849 103.882L213.535 192.312L64.4538 66.3802Z';

	interface MatrixDot {
		x: number;
		y: number;
		isInside: boolean;
		distCenter: number;
		diagProj: number; // 0 to 1 along bottom-left to top-right diagonal
	}

	let dots: MatrixDot[] = [];

	function initDots(ctx: CanvasRenderingContext2D) {
		dots = [];
		const path = new Path2D(SVG_PATH_D);
		const step = 10;
		const cx = 240;
		const cy = 240;

		// Diagonal from bottom-left (67, 458) to top-right (457, 68)
		const x0 = 67;
		const y0 = 458;
		const x1 = 457;
		const y1 = 68;
		const dx = x1 - x0;
		const dy = y1 - y0;
		const lenSq = dx * dx + dy * dy;

		for (let x = 6; x < 520; x += step) {
			for (let y = 6; y < 520; y += step) {
				const isInside = ctx.isPointInPath(path, x, y);
				const distCenter = Math.hypot(x - cx, y - cy);
				const proj = ((x - x0) * dx + (y - y0) * dy) / lenSq;

				dots.push({
					x,
					y,
					isInside,
					distCenter,
					diagProj: proj
				});
			}
		}
	}

	function drawFrame(ctx: CanvasRenderingContext2D, p: number, elapsed: number) {
		ctx.clearRect(0, 0, 520, 520);

		// Phase progression:
		// 1. Pre-dawn ambient twilight (0 to 0.20)
		// 2. Dawnbreak wave along diagonal (0.20 to 0.75)
		// 3. Crystallization into pure black dots (0.75 to 1.0)
		const waveFront = Math.max(0, (p - 0.15) / 0.6); // 0 to 1

		for (let i = 0; i < dots.length; i++) {
			const d = dots[i];
			let alpha = 0.06; // subtle ambient dot
			let r = 1.2;
			let color = '#000914';

			if (p < 0.2) {
				// Pre-dawn subtle undulation
				const horizonFactor = Math.max(0, (d.y - 300) / 220);
				alpha = 0.05 + horizonFactor * 0.15 * Math.sin(elapsed * 0.003 + d.x * 0.02);
				color = horizonFactor > 0.4 ? '#3300FF' : '#000914';
			} else if (p < 0.75) {
				// Wave sweeping along diagonal
				const distFromWave = d.diagProj - waveFront;

				if (distFromWave < 0) {
					// Behind wave: locking into black dots for starburst
					if (d.isInside) {
						const settle = Math.min(1, Math.abs(distFromWave) * 3);
						alpha = 0.7 + settle * 0.3;
						r = 2.4;
						color = '#000914';
					} else {
						alpha = Math.max(0.05, 0.2 - Math.abs(distFromWave) * 0.5);
						r = 1.2;
						color = '#000914';
					}
				} else if (distFromWave < 0.16) {
					// On the active wave front: accent blue crest
					const crest = 1 - distFromWave / 0.16;
					alpha = 0.5 + crest * 0.5;
					r = 1.5 + crest * 1.3;
					color = '#3300FF';
				} else {
					// Ahead of wave
					alpha = 0.05;
					color = '#000914';
				}
			} else {
				// Final frame: clean black dots (#000914) for starburst, faint ambient background
				if (d.isInside) {
					alpha = 1.0;
					r = 2.4;
					color = '#000914';
				} else {
					alpha = 0.06;
					r = 1.2;
					color = '#000914';
				}
			}

			// Render dot
			ctx.beginPath();
			ctx.arc(d.x, d.y, r, 0, Math.PI * 2);
			ctx.fillStyle = color;
			ctx.globalAlpha = Math.max(0, Math.min(1, alpha));
			ctx.fill();
		}

		// Draw technical corner reticle in accent blue (#3300FF)
		if (p > 0.6) {
			const reticleProgress = Math.min(1, (p - 0.6) / 0.25);
			ctx.globalAlpha = reticleProgress;
			ctx.strokeStyle = '#3300FF';
			ctx.lineWidth = 12;
			ctx.lineCap = 'square';
			ctx.lineJoin = 'miter';

			ctx.beginPath();
			// Path: M485 442V474H454
			const totalLen = 63;
			const currentLen = reticleProgress * totalLen;

			ctx.moveTo(485, 442);
			if (currentLen <= 32) {
				ctx.lineTo(485, 442 + currentLen);
			} else {
				ctx.lineTo(485, 474);
				ctx.lineTo(485 - (currentLen - 32), 474);
			}
			ctx.stroke();
		}
	}

	onMount(() => {
		if (!canvasEl) return;
		const context = canvasEl.getContext('2d');
		if (!context) return;
		const ctx = context;

		const dpr = typeof window !== 'undefined' ? (window.devicePixelRatio || 1) : 1;
		canvasEl.width = 520 * dpr;
		canvasEl.height = 520 * dpr;
		ctx.scale(dpr, dpr);

		initDots(ctx);

		// Render initial pre-dawn ambient state while page is loading
		drawFrame(ctx, 0, 0);

		function startSweep() {
			if (animId !== null) return;
			startTime = performance.now();

			function render(now: number) {
				const elapsed = now - startTime;
				const p = Math.min(elapsed / DURATION_MS, 1);

				drawFrame(ctx, p, elapsed);

				// Sweep once and finish
				if (p < 1) {
					animId = requestAnimationFrame(render);
				} else {
					animId = null;
				}
			}

			animId = requestAnimationFrame(render);
		}

		if (typeof document !== 'undefined' && document.readyState === 'complete') {
			startSweep();
		} else if (typeof window !== 'undefined') {
			loadListener = () => {
				startSweep();
				loadListener = null;
			};
			window.addEventListener('load', loadListener, { once: true });
		}
	});

	onDestroy(() => {
		if (typeof window !== 'undefined' && loadListener) {
			window.removeEventListener('load', loadListener);
		}
		if (typeof cancelAnimationFrame !== 'undefined' && animId !== null) {
			cancelAnimationFrame(animId);
		}
	});
</script>

<div
	class="relative w-full h-full aspect-square flex items-center justify-center select-none overflow-hidden p-0 bg-transparent border-0 pointer-events-none"
	aria-hidden="true"
>
	<!-- Canvas Dotmatrix Layer -->
	<canvas
		bind:this={canvasEl}
		width={520}
		height={520}
		class="w-full h-full object-contain block"
	></canvas>
</div>
