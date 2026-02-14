import React, { useState } from 'react';
import { CheckCircle2, ChevronRight, RefreshCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Quiz = () => {
    const { t, language } = useLanguage();

    const [step, setStep] = useState(0);
    const [score, setScore] = useState(0);
    const [completed, setCompleted] = useState(false);

    const questions = [
        {
            question: t("quiz_q1"),
            options: [
                { text: t("quiz_q1_o1"), points: 1 },
                { text: t("quiz_q1_o2"), points: 2 },
                { text: t("quiz_q1_o3"), points: 3 },
                { text: t("quiz_q1_o4"), points: 4 },
            ],
        },
        {
            question: t("quiz_q2"),
            options: [
                { text: t("quiz_q2_o1"), points: 1 },
                { text: t("quiz_q2_o2"), points: 2 },
                { text: t("quiz_q2_o3"), points: 3 },
                { text: t("quiz_q2_o4"), points: 4 },
            ],
        },
        {
            question: t("quiz_q3"),
            options: [
                { text: t("quiz_q3_o1"), points: 1 },
                { text: t("quiz_q3_o2"), points: 2 },
                { text: t("quiz_q3_o3"), points: 3 },
                { text: t("quiz_q3_o4"), points: 4 },
            ],
        },
    ];

    const handleAnswer = (points: number) => {
        setScore(score + points);
        if (step < questions.length - 1) {
            setStep(step + 1);
        } else {
            setCompleted(true);
        }
    };

    const resetQuiz = () => {
        setStep(0);
        setScore(0);
        setCompleted(false);
    };

    return (
        <div className="w-full max-w-xl mx-auto mt-20 p-8 glass-card rounded-[2rem] relative overflow-hidden">
            <div className="glass-card-border" />

            {!completed ? (
                <div className="relative z-10">
                    <div className="flex justify-between items-center mb-8">
                        <span className="text-primary font-bold text-xs uppercase tracking-widest">
                            {language === 'de' ? `Frage ${step + 1} von ${questions.length}` : `Question ${step + 1} of ${questions.length}`}
                        </span>
                        <div className="flex gap-1">
                            {questions.map((_, i) => (
                                <div key={i} className={`h-1.5 w-6 rounded-full transition-colors ${i <= step ? 'bg-primary' : 'bg-white/10'}`} />
                            ))}
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-8 leading-tight">{questions[step].question}</h3>

                    <div className="space-y-4">
                        {questions[step].options.map((option, i) => (
                            <button
                                key={i}
                                onClick={() => handleAnswer(option.points)}
                                className="w-full p-5 text-left rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/5 transition-all group flex justify-between items-center"
                            >
                                <span className="font-medium">{option.text}</span>
                                <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all text-primary" />
                            </button>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="text-center py-8 relative z-10 animate-reveal">
                    <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-3xl font-bold mb-4">{t("quiz_complete")}</h3>
                    <p className="text-muted-foreground mb-8 text-lg">
                        {score > 9
                            ? t("quiz_result_high")
                            : score > 6
                                ? t("quiz_result_med")
                                : t("quiz_result_low")
                        }
                    </p>

                    <div className="space-y-4">
                        <Button className="w-full bg-primary text-primary-foreground font-bold py-6 h-auto text-lg rounded-xl">
                            {t("quiz_cta")}
                        </Button>
                        <button
                            onClick={resetQuiz}
                            className="flex items-center gap-2 mx-auto text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
                        >
                            <RefreshCcw className="w-4 h-4" />
                            {t("quiz_retake")}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Quiz;
