import React from 'react';

const BackgroundEffects = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
            <div className="noise-overlay" />
            <div className="mesh-gradient" />
            <div className="blob top-[-10%] left-[-10%]" style={{ animationDelay: '0s' }} />
            <div className="blob top-[40%] right-[-5%] animation-delay-2000" style={{ animationDelay: '-5s', opacity: 0.1 }} />
            <div className="blob bottom-[-10%] left-[20%] animation-delay-4000" style={{ animationDelay: '-10s', opacity: 0.08 }} />
        </div>
    );
};

export default BackgroundEffects;
