import React, { useRef, useState, useEffect } from 'react';
import { Button, ButtonProps } from './button';
import { cn } from '@/lib/utils';

interface MagneticButtonProps extends ButtonProps {
    strength?: number;
}

const MagneticButton = ({ children, strength = 30, className, ...props }: MagneticButtonProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();

        const centerX = left + width / 2;
        const centerY = top + height / 2;

        const x = (clientX - centerX) / (width / 2);
        const y = (clientY - centerY) / (height / 2);

        setPosition({ x: x * strength, y: y * strength });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="inline-block"
        >
            <div
                style={{
                    transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
                    transition: position.x === 0 ? 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)' : 'none',
                }}
            >
                <Button className={cn("relative transition-transform duration-200", className)} {...props}>
                    {children}
                </Button>
            </div>
        </div>
    );
};

export default MagneticButton;
