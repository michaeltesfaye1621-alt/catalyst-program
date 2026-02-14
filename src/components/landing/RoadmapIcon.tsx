import React from 'react';

interface RoadmapIconProps {
    type: 'flame' | 'wrench' | 'shield';
    className?: string;
}

const RoadmapIcon = ({ type, className }: RoadmapIconProps) => {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            {type === 'flame' && (
                <path
                    className="animate-svg-draw"
                    d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"
                />
            )}
            {type === 'wrench' && (
                <path
                    className="animate-svg-draw"
                    d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
                />
            )}
            {type === 'shield' && (
                <path
                    className="animate-svg-draw"
                    d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                />
            )}
        </svg>
    );
};

export default RoadmapIcon;
