export const sections = [
    {
        id: "hero",
        name: "Hero",
        titleKey: "hero_headline_1",
        labelKey: "hero_cta",
    },
    {
        id: "specialist",
        name: "Who guides your recovery",
        titleKey: "specialist_title_1",
        labelKey: "nav_process", // Wait, this depends on nav
    },
    {
        id: "roadmap",
        name: "Process",
        titleKey: "roadmap_title_1",
        labelKey: "nav_process",
    },
    {
        id: "case-studies",
        name: "Results",
        titleKey: "cases_title_1",
        labelKey: "nav_results",
    },
    {
        id: "faq",
        name: "FAQ",
        titleKey: "faq_title_1",
        labelKey: "nav_faq",
    },
    {
        id: "pricing",
        name: "Pricing",
        titleKey: "pricing_title_1",
        labelKey: "nav_pricing",
    },
] as const;

export type SectionId = typeof sections[number]["id"];
