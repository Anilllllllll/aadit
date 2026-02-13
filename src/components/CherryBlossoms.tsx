// NOTICE: Personal Use Only
// This content is licensed for unlimited personal use only. Resale, redistribution,
// modification for resale, or any form of commercial use is strictly prohibited.
//
// Enforcement: Any misuse or violation of these terms will result in account
// takedown and may lead to legal action.
//
// Original Creator: Pinak Kundu
// Date: 12th February 2026, 9:25 PM
import React, { useEffect, useRef } from 'react';

const CherryBlossoms: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let width = window.innerWidth;
        let height = window.innerHeight;

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener('resize', resize);
        resize();

        const hearts: Heart[] = [];
        const heartCount = 50;

        class Heart {
            x: number;
            y: number;
            size: number;
            speed: number;
            opacity: number;
            angle: number;
            spin: number;

            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height - height;
                this.size = Math.random() * 10 + 5;
                this.speed = Math.random() * 1 + 0.5;
                this.opacity = Math.random() * 0.5 + 0.3;
                this.angle = Math.random() * Math.PI * 2;
                this.spin = Math.random() * 0.02 - 0.01;
            }

            update() {
                this.y += this.speed;
                this.x += Math.sin(this.angle) * 0.5;
                this.angle += this.spin;

                if (this.y > height) {
                    this.y = -20;
                    this.x = Math.random() * width;
                }
            }

            draw() {
                if (!ctx) return;
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate(this.angle);
                ctx.globalAlpha = this.opacity;
                ctx.fillStyle = '#D7C2FF'; // Lavender color
                const s = this.size;
                ctx.beginPath();
                ctx.moveTo(0, s * 0.35);
                ctx.bezierCurveTo(-s * 0.5, -s * 0.1, -s, s * 0.35, 0, s);
                ctx.bezierCurveTo(s, s * 0.35, s * 0.5, -s * 0.1, 0, s * 0.35);
                ctx.closePath();
                ctx.fill();
                ctx.restore();
            }
        }

        for (let i = 0; i < heartCount; i++) {
            hearts.push(new Heart());
        }

        const animate = () => {
            ctx.clearRect(0, 0, width, height);
            hearts.forEach((heart) => {
                heart.update();
                heart.draw();
            });
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 5,
            }}
        />
    );
};

export default CherryBlossoms;
