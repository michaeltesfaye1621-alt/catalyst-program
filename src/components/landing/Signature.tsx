import React, { useEffect, useRef, useState } from 'react';

const Signature = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div ref={ref} className="mt-8">
            <svg
                width="200"
                height="80"
                viewBox="0 0 200 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-primary opacity-80"
            >
                <path
                    d="M20 50C30 45 40 30 50 35C60 40 55 60 70 55C85 50 90 20 110 30C130 40 120 70 150 60C180 50 170 20 190 40"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                        strokeDasharray: 500,
                        strokeDashoffset: isVisible ? 0 : 500,
                        transition: 'stroke-dashoffset 2s ease-out',
                    }}
                />
                <text
                    x="30"
                    y="70"
                    className="fill-primary font-serif italic text-[12px] opacity-40 select-none"
                    style={{
                        opacity: isVisible ? 0.4 : 0,
                        transition: 'opacity 1s ease-out 1.5s',
                    }}
                >
                    Dr. Aris Thorne
                </text>
            </svg>
        </div>
    );
};

export default Signature;
