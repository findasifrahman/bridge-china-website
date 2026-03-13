import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { InquiryProvider } from "@/components/inquiry/inquiry-provider";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { SocialBar } from "@/components/layout/social-bar";
import type { ReactNode } from "react";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans"
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bridgechina.example"),
  title: {
    default: "BridgeChina",
    template: "%s | BridgeChina"
  },
  description:
    "BridgeChina is a premium corporate website foundation for cross-border market positioning, partnerships, and strategic visibility.",
  applicationName: "BridgeChina",
  openGraph: {
    title: "BridgeChina",
    description:
      "Premium static website foundation for a modern China-facing brand.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "BridgeChina",
    description:
      "Premium static website foundation for a modern China-facing brand."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} ${cormorant.variable} min-h-screen`}>
        <InquiryProvider>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 px-0 pb-24 pt-20 lg:pb-0">{children}</main>
            <Footer />
            <SocialBar />
          </div>
        </InquiryProvider>
      </body>
    </html>
  );
}
