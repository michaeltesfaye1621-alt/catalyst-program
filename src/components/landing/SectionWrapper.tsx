import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
    id: string;
    children: ReactNode;
    className?: string;
    containerClassName?: string;
    bgVariant?: "default" | "muted" | "subtle";
}

const SectionWrapper = ({
    id,
    children,
    className,
    containerClassName,
    bgVariant = "default",
}: SectionWrapperProps) => {
    const bgStyles = {
        default: "bg-background",
        muted: "bg-card/20",
        subtle: "bg-card/30",
    };

    return (
        <section
            id={id}
            className={cn(
                "section-padding scroll-mt-20 overflow-hidden",
                bgStyles[bgVariant],
                className
            )}
        >
            <div className={cn("container-narrow", containerClassName)}>
                {children}
            </div>
        </section>
    );
};

export default SectionWrapper;
