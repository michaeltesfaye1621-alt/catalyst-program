import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import SectionWrapper from './SectionWrapper';
import AppMockup from './AppMockup';
import { Tablet, Smartphone, Laptop, CheckCircle2 } from 'lucide-react';

const ProductPreview = () => {
    const { t } = useLanguage();

    const features = [
        t("portal_feat_1"),
        t("portal_feat_2"),
        t("portal_feat_3"),
        t("portal_feat_4")
    ];

    return (
        <SectionWrapper id="the-portal" className="relative overflow-visible">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
                <div className="order-2 lg:order-1 relative flex justify-center py-20 lg:py-0 scale-90 md:scale-100">
                    <AppMockup />
                </div>

                <div className="order-1 lg:order-2 animate-reveal">
                    <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">{t("portal_label")}</span>
                    <h2 className="mt-4 mb-8 text-balance">
                        {t("portal_title_1")} <span className="energy-gradient block">{t("portal_title_2")}</span>
                    </h2>
                    <p className="text-xl text-readable mb-10 leading-relaxed">
                        {t("portal_sub")}
                    </p>

                    <div className="space-y-6 mb-12">
                        {features.map((f, i) => (
                            <div key={i} className="flex gap-4 items-center group">
                                <div className="p-1 rounded-full bg-primary/20 text-primary group-hover:scale-110 transition-transform">
                                    <CheckCircle2 className="w-5 h-5" />
                                </div>
                                <span className="text-lg font-medium opacity-80">{f}</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex gap-8 opacity-40 grayscale">
                        <Smartphone className="w-8 h-8" />
                        <Tablet className="w-8 h-8" />
                        <Laptop className="w-8 h-8" />
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default ProductPreview;
