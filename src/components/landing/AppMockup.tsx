import React from 'react';
import { Play, Activity, MessageSquare, ShieldCheck, Trophy } from 'lucide-react';

const AppMockup = () => {
    return (
        <div className="relative w-[300px] h-[600px] mx-auto group">
            {/* Phone Frame */}
            <div className="absolute inset-0 bg-[#0A0A0A] rounded-[3rem] border-8 border-[#1A1A1A] shadow-[0_0_100px_rgba(0,209,209,0.15)] overflow-hidden">
                {/* Screen Content */}
                <div className="relative h-full w-full flex flex-col bg-background">
                    {/* Top Bar (Status) */}
                    <div className="h-12 flex items-center justify-between px-8 border-b border-white/5">
                        <div className="text-[10px] font-bold">9:41</div>
                        <div className="flex gap-1.5">
                            <div className="w-4 h-2 bg-white/20 rounded-sm" />
                            <div className="w-3 h-3 bg-primary rounded-full" />
                        </div>
                    </div>

                    {/* App Header */}
                    <div className="p-6">
                        <span className="text-[10px] font-black tracking-[0.2em] text-primary uppercase">Active Program</span>
                        <h4 className="text-xl font-black mt-1">THE CATALYST</h4>
                    </div>

                    {/* Video Player Placeholder */}
                    <div className="mx-4 h-40 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center relative overflow-hidden group/video border border-white/5">
                        <div className="absolute inset-0 bg-black/20 group-hover/video:bg-transparent transition-all duration-500" />
                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg transform group-hover/video:scale-110 transition-all duration-500">
                            <Play className="w-6 h-6 text-primary-foreground fill-current ml-1" />
                        </div>
                        <div className="absolute bottom-3 left-4 right-4 h-1 bg-white/10 rounded-full">
                            <div className="h-full w-2/3 bg-primary" />
                        </div>
                    </div>

                    {/* Exercise Info */}
                    <div className="p-6 space-y-4">
                        <div className="flex justify-between items-center">
                            <h5 className="font-bold text-sm">Biomechanical Correction #4</h5>
                            <span className="text-[10px] text-muted-foreground">12:40 / 18:00</span>
                        </div>

                        {/* Stats Row */}
                        <div className="grid grid-cols-2 gap-3">
                            <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                                <Activity className="w-4 h-4 text-primary mb-2" />
                                <div className="text-[10px] text-muted-foreground">Force Dist.</div>
                                <div className="text-xs font-bold">Optimal</div>
                            </div>
                            <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                                <ShieldCheck className="w-4 h-4 text-primary mb-2" />
                                <div className="text-[10px] text-muted-foreground">Stability</div>
                                <div className="text-xs font-bold">98.2%</div>
                            </div>
                        </div>

                        {/* Message Preview */}
                        <div className="p-3 bg-primary/5 border border-primary/20 rounded-xl relative">
                            <div className="flex items-center gap-2 mb-1">
                                <div className="w-4 h-4 rounded-full bg-primary flex items-center justify-center">
                                    <MessageSquare className="w-2 h-2 text-primary-foreground" />
                                </div>
                                <span className="text-[10px] font-bold">Concierge Support</span>
                            </div>
                            <p className="text-[10px] text-muted-foreground leading-tight">Your recent form check looks great. Focus on the hip hinge...</p>
                        </div>
                    </div>

                    {/* Nav Bar */}
                    <div className="mt-auto h-20 border-t border-white/5 flex items-center justify-around px-4">
                        <Play className="w-5 h-5 text-primary" />
                        <Activity className="w-5 h-5 text-muted-foreground opacity-50" />
                        <Trophy className="w-5 h-5 text-muted-foreground opacity-50" />
                        <MessageSquare className="w-5 h-5 text-muted-foreground opacity-50" />
                    </div>
                </div>

                {/* Reflection/Shine Line */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/10 to-transparent skew-x-12 translate-x-32 group-hover:translate-x-[-150%] transition-all duration-[1500ms]" />
            </div>

            {/* Float Animations Decorative Elements */}
            <div className="absolute -right-20 top-20 w-40 h-40 bg-primary/20 rounded-full blur-[60px] animate-pulse" />
            <div className="absolute -left-20 bottom-20 w-40 h-40 bg-primary/10 rounded-full blur-[60px] animate-pulse delay-700" />
        </div>
    );
};

export default AppMockup;
