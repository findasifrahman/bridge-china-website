"use client";

import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
  Youtube
} from "lucide-react";
import { useInquiryDrawer } from "@/components/inquiry/inquiry-provider";
import { cn } from "@/lib/utils";

const socialLinks = [
  { href: "https://www.youtube.com/", label: "YouTube", icon: Youtube, color: "text-[#FF0000]" },
  { href: "https://www.instagram.com/", label: "Instagram", icon: Instagram, color: "text-[#E4405F]" },
  { href: "https://wa.me/8613265980063", label: "WhatsApp", icon: MessageCircle, color: "text-[#25D366]" },
  { href: "https://www.facebook.com/", label: "Facebook", icon: Facebook, color: "text-[#1877F2]" },
  { href: "https://www.linkedin.com/", label: "LinkedIn", icon: Linkedin, color: "text-[#0A66C2]" }
];

export function SocialBar() {
  const { open } = useInquiryDrawer();

  return (
    <>
      <div
        className={cn(
          "fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 transition-all duration-300 lg:block",
          open && "pointer-events-none opacity-0"
        )}
      >
        <div className="flex flex-col gap-4 rounded-full bg-white/82 px-3 py-4 shadow-[0_12px_26px_rgba(18,34,67,0.08)] backdrop-blur-sm">
          {socialLinks.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                className={cn(
                  "flex h-8 w-8 items-center justify-center transition-transform duration-300 hover:-translate-y-0.5",
                  item.color
                )}
              >
                <Icon className="h-6 w-6" />
              </Link>
            );
          })}
        </div>
      </div>

      <div
        className={cn(
          "fixed inset-x-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 transition-all duration-300 lg:hidden",
          open && "pointer-events-none translate-y-4 opacity-0"
        )}
      >
        <div className="flex items-center justify-between gap-2 rounded-full bg-white/88 px-4 py-3 shadow-[0_12px_26px_rgba(18,34,67,0.08)] backdrop-blur-sm">
          {socialLinks.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                className={cn(
                  "flex min-h-10 flex-1 items-center justify-center py-1 transition-transform duration-300 hover:-translate-y-0.5",
                  item.color
                )}
              >
                <Icon className="h-6 w-6" />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
