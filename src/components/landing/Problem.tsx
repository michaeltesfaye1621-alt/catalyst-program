import { useLanguage } from "@/contexts/LanguageContext";
import SectionWrapper from "./SectionWrapper";
import { AlertCircle, XCircle, TrendingDown } from "lucide-react";

const Problem = () => {
    const { t } = useLanguage();

    const painPoints = [
        {
            icon: XCircle,
            text: "Chronic pain that dictates your daily schedule and limits your life.",
        },
        {
            icon: TrendingDown,
            text: "Traditional 'rehab' that only treats symptoms, leading to relapses.",
        },
        {
            icon: AlertCircle,
            text: "The frustration of knowing you're capable of more, but your body is holding you back.",
        },
    ];

    return (
        <SectionWrapper id="problem" bgVariant="default">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="animate-reveal">
                    <h2 className="mb-8 text-balance">
                        Pain isn't a life sentence—it's a <span className="text-primary">signal of dysfunction.</span>
                    </h2>
                    <div className="space-y-6">
                        {painPoints.map((point, index) => (
                            <div key={index} className="flex gap-4 items-start group">
                                <point.icon className="h-6 w-6 text-primary mt-1 shrink-0 group-hover:scale-110 transition-transform" />
                                <p className="text-lg text-muted-foreground">{point.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-card/40 backdrop-blur-sm border border-border/50 rounded-[3rem] p-10 md:p-16 animate-reveal animate-stagger-1">
                    <h3 className="mb-6">The Cycle Stops Here.</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                        Most therapy focuses on where it hurts. We focus on <strong>why it hurts.</strong> By correcting the underlying biomechanical architecture, we don't just fix the pain—we prevent it from ever coming back.
                    </p>
                    <div className="h-1 w-20 bg-primary/30 rounded-full" />
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Problem;
