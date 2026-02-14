import React, { useEffect, useState } from 'react';

const ScrollProgress = () => {
    const [progress, setProgress] = useState(0);

    const updateScrollProgress = () => {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / scrollHeight) * 100;
        setProgress(scrolled);
    };

    useEffect(() => {
        window.addEventListener('scroll', updateScrollProgress);
        return () => window.removeEventListener('scroll', updateScrollProgress);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-[3px] z-[100] pointer-events-none">
            <div
                className="h-full bg-primary transition-all duration-150 ease-out shadow-[0_0_10px_rgba(0,209,209,0.5)]"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
};

export default ScrollProgress;
