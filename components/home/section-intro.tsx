import { cn } from "@/lib/utils";
import Image from "next/image";
import type { ReactNode } from "react";

type SectionIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  centered?: boolean;
  invert?: boolean;
  className?: string;
  visualSrc?: string;
  visualTitle?: string;
  visualCaption?: string;
  icon?: ReactNode;
};

export function SectionIntro({
  eyebrow,
  title,
  description,
  centered = false,
  invert = false,
  className,
  visualSrc,
  visualTitle,
  visualCaption,
  icon
}: SectionIntroProps) {
  if (visualSrc && !centered) {
    return (
      <div className={cn("space-y-6 text-center", className)}>
        <div className="mx-auto max-w-4xl space-y-4">
          <p className={cn("eyebrow", invert && "text-white/[0.65]")}>{eyebrow}</p>
          <h2 className={cn("display-lg text-balance", invert && "text-white")}>
            {title}
          </h2>
          <p
            className={cn(
              "body-lg mx-auto max-w-3xl text-balance",
              invert && "text-white/70"
            )}
          >
            {description}
          </p>
        </div>
        <div className="section-hero-card mx-auto min-h-[18rem] w-full max-w-6xl">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.1),transparent_46%,rgba(215,38,79,0.08))]" />
          <Image
            src={visualSrc}
            alt={visualTitle ?? title}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(21,8,11,0.06),rgba(21,8,11,0.56))]" />
          <div className="relative z-10 flex h-full flex-col justify-between text-left">
            <div className="flex items-start justify-between gap-4">
              <div className="rounded-2xl bg-white/[0.88] p-3 text-primary shadow-sm">
                {icon}
              </div>
              <div className="rounded-full border border-white/30 bg-white/[0.12] px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-white">
                AI-style visual
              </div>
            </div>
            <div className="space-y-2 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-white/70">
                Section Overview
              </p>
              <p className="text-2xl font-semibold tracking-tight">{visualTitle ?? title}</p>
              <p className="max-w-md text-sm leading-7 text-white/[0.74]">
                {visualCaption ?? description}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "space-y-4",
        centered && "mx-auto max-w-3xl text-center",
        className
      )}
    >
      <p className={cn("eyebrow", invert && "text-white/[0.65]")}>{eyebrow}</p>
      <h2 className={cn("display-lg text-balance", invert && "text-white")}>
        {title}
      </h2>
      <p className={cn("body-lg text-balance", invert && "text-white/70")}>
        {description}
      </p>
    </div>
  );
}
