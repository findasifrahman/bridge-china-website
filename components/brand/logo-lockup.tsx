import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoLockupProps = {
  href?: string;
  compact?: boolean;
  className?: string;
};

export function LogoLockup({
  href = "/",
  compact = false,
  className
}: LogoLockupProps) {
  const content = (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="relative h-11 w-11 overflow-hidden rounded-2xl border border-[hsl(var(--border))] bg-white shadow-[0_8px_18px_rgba(18,34,67,0.08)]">
        <Image
          src="/brand-mark.svg"
          alt="BridgeChina logo"
          fill
          className="object-cover"
          sizes="44px"
          priority={compact}
        />
      </div>
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[hsl(var(--electric-500))]">
          BridgeChina
        </p>
        <p className="text-xs text-muted-foreground">
          Connecting Industry and Technology
        </p>
      </div>
    </div>
  );

  if (!href) {
    return content;
  }

  return <Link href={href}>{content}</Link>;
}
