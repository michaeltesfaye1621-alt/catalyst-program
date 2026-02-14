import { useRef, useState, useEffect } from 'react';

export const useMagnetic = (strength = 40) => {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: MouseEvent) => {
        if (!ref.current) return;
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();

        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);

        // Check if mouse is within a reasonable distance
        const distance = Math.sqrt(x * x + y * y);
        const maxDistance = 150;

        if (distance < maxDistance) {
            const moveX = (x / width) * strength;
            const moveY = (y / height) * strength;
            setPosition({ x: moveX, y: moveY });
        } else {
            setPosition({ x: 0, y: 0 });
        }
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return { ref, position, handleMouseLeave };
};
