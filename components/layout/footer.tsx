import Link from "next/link";
import { LogoLockup } from "@/components/brand/logo-lockup";

const footerLinks = [
  { href: "#", label: "Privacy" },
  { href: "#", label: "Terms" },
  { href: "/contact", label: "Contact" }
];

export function Footer() {
  return (
    <footer className="border-t border-border/80 bg-white/70">
      <div className="container-shell section-space-sm flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-3">
          <LogoLockup className="items-start" />
          <p className="max-w-md text-sm leading-7 text-muted-foreground">
            China-based technical sourcing support for renewable energy,
            industrial equipment, scientific hardware, electronics, and
            specification-led import programs.
          </p>
        </div>
        <div className="flex flex-col gap-3 text-sm text-muted-foreground sm:items-end">
          <div className="flex gap-4">
            {footerLinks.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-foreground">
                {link.label}
              </Link>
            ))}
          </div>
          <p>Copyright 2026 BridgeChina. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
