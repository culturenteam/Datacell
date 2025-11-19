import React, { useEffect, useRef } from 'react';

const CELL_SIZE = 4; 
const ALIVE_COLOR = '#FFFFFF'; // White cells
const DEAD_COLOR = '#0f172a';  // Slate 900 background

const CellularAutomataStrip: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    let animationFrameId: number;
    let grid: number[][] = [];
    let cols = 0;
    let rows = 0;

    // Initialize grid
    const initGrid = () => {
      if (!container || !canvas) return;
      const width = container.offsetWidth;
      const height = container.offsetHeight;
      
      // Set canvas resolution
      canvas.width = width;
      canvas.height = height;
      
      cols = Math.ceil(width / CELL_SIZE);
      rows = Math.ceil(height / CELL_SIZE);

      // Create random grid
      grid = new Array(cols).fill(null).map(() => 
        new Array(rows).fill(null).map(() => Math.random() > 0.85 ? 1 : 0)
      );
    };

    const draw = (ctx: CanvasRenderingContext2D) => {
      // Fill background
      ctx.fillStyle = DEAD_COLOR;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = ALIVE_COLOR;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          if (grid[i][j] === 1) {
            // Draw slightly smaller rect for "pixel" gap effect
            ctx.fillRect(i * CELL_SIZE, j * CELL_SIZE, CELL_SIZE, CELL_SIZE);
          }
        }
      }
    };

    const update = () => {
      const newGrid = grid.map(arr => [...arr]);

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const state = grid[i][j];
          
          // Count neighbors
          let neighbors = 0;
          for (let x = -1; x < 2; x++) {
            for (let y = -1; y < 2; y++) {
              if (x === 0 && y === 0) continue;
              const col = (i + x + cols) % cols;
              const row = (j + y + rows) % rows;
              neighbors += grid[col][row];
            }
          }

          // Game of Life Rules
          if (state === 0 && neighbors === 3) {
            newGrid[i][j] = 1;
          } else if (state === 1 && (neighbors < 2 || neighbors > 3)) {
            newGrid[i][j] = 0;
          } else {
            newGrid[i][j] = state;
          }
          
          // Engaging Noise: High volatility
          if (Math.random() < 0.002) newGrid[i][j] = 1;
          if (Math.random() < 0.002) newGrid[i][j] = 0;
        }
      }

      grid = newGrid;
    };

    const loop = () => {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        setTimeout(() => {
            update();
            draw(ctx);
            animationFrameId = requestAnimationFrame(loop);
        }, 60); 
      }
    };

    initGrid();
    const ctx = canvas.getContext('2d');
    if(ctx) draw(ctx);
    loop();

    const handleResize = () => {
      initGrid();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // h-24 is 96px, approx 2x original h-12.
  return (
    <div className="relative z-0">
        <div ref={containerRef} className="w-full h-24 bg-slate-900 overflow-hidden relative border-x border-slate-900">
            <canvas ref={canvasRef} className="block w-full h-full opacity-100" />
             {/* Optional scanline overlay for extra retro feel */}
             <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_4px,6px_100%] pointer-events-none"></div>
        </div>
    </div>
  );
};

export default CellularAutomataStrip;