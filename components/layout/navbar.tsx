"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, MoveRight } from "lucide-react";
import { LogoLockup } from "@/components/brand/logo-lockup";
import { InquiryTrigger } from "@/components/inquiry/inquiry-trigger";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";

const navItems = [
  { href: "/#what-we-source", label: "What We Source" },
  { href: "/#services", label: "Services" },
  { href: "/#process", label: "Process" },
  { href: "/#faq", label: "FAQ" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/80 bg-[rgba(253,252,250,0.96)] backdrop-blur-sm">
      <div className="container-shell flex h-20 items-center justify-between gap-6">
        <LogoLockup compact />

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-foreground/78 hover:text-[hsl(var(--navy-950))]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <InquiryTrigger>
            Send Inquiry
            <MoveRight className="ml-2 h-4 w-4" />
          </InquiryTrigger>
        </div>

        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-foreground">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open navigation</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-sm">
              <div className="flex min-h-full flex-col px-6 py-16">
                <SheetTitle className="sr-only">Mobile navigation</SheetTitle>
                <div className="border-b border-border/70 pb-5">
                  <LogoLockup />
                </div>
                <nav className="flex flex-col gap-2 py-6">
                  {navItems.map((item) => (
                    <SheetClose asChild key={item.label}>
                      <Link
                        href={item.href}
                        className="rounded-2xl px-4 py-3 text-base font-medium text-[hsl(var(--navy-950))] transition hover:bg-[hsl(var(--sand-100))]"
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
                <div className="mt-auto pt-4">
                  <InquiryTrigger
                    className="w-full"
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    Send Inquiry
                    <MoveRight className="ml-2 h-4 w-4" />
                  </InquiryTrigger>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
