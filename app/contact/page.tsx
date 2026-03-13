import Link from "next/link";
import {
  Building2,
  Mail,
  Map,
  MapPin,
  MessageCircle,
  Phone,
  QrCode,
  Send
} from "lucide-react";
import { SectionIntro } from "@/components/home/section-intro";
import { InquiryTrigger } from "@/components/inquiry/inquiry-trigger";
import { MotionDiv } from "@/components/motion/motion-div";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const companyAddress =
  "Room 13D, 13th Floor, Rongjian Building, No. 29 Liuma Road, Huale Construction, Yuexiu District, Guangzhou, Guangzhou, China";

export default function ContactPage() {
  return (
    <>
      <section className="section-space overflow-hidden pb-10 sm:pb-14">
        <div className="container-shell">
          <div className="panel-dark relative overflow-hidden p-8 sm:p-10 lg:p-14">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(215,38,79,0.2),transparent_28%),radial-gradient(circle_at_85%_15%,rgba(255,176,56,0.14),transparent_24%)]" />
            <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div className="space-y-5">
                <p className="eyebrow text-white/70">Contact BridgeChina</p>
                <h1 className="display-xl max-w-4xl text-white">
                  Start the conversation with a sourcing team based in China.
                </h1>
                <p className="body-lg max-w-2xl text-white/70">
                  Send a technical requirement, discuss supplier-side questions,
                  or request support for OEM, machinery, electronics, and
                  cross-border sourcing programs.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <InquiryTrigger size="lg" className="w-full sm:w-auto">
                    Send Inquiry
                    <Send className="ml-2 h-4 w-4" />
                  </InquiryTrigger>
                  <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto">
                    <Link href="https://wa.me/8613265980063" target="_blank" rel="noreferrer">
                      Contact on WhatsApp
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    ["Response path", "Inquiry drawer or WhatsApp"],
                    ["Location", "Guangzhou, China"],
                    ["Support focus", "Technical sourcing and supplier coordination"],
                    ["Availability", "B2B consultation and intake"]
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-[1.25rem] border border-white/10 bg-black/10 p-4"
                    >
                      <p className="text-xs uppercase tracking-[0.24em] text-white/50">
                        {label}
                      </p>
                      <p className="mt-3 text-sm leading-7 text-white">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space-sm pt-0">
        <div className="container-shell section-stack">
          <SectionIntro
            eyebrow="Contact details"
            title="Direct company information, location, and quick contact channels."
            description="Use the inquiry drawer for structured sourcing requests, or contact BridgeChina directly through phone, WhatsApp, and your preferred business channel."
          />

          <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
            <MotionDiv
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45 }}
            >
              <Card className="consulting-card">
                <CardContent className="space-y-6 p-6 sm:p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-[1.35rem] bg-[linear-gradient(180deg,hsl(var(--navy-950)),rgba(215,38,79,0.9))] text-white shadow-glow">
                      <Building2 className="h-6 w-6 text-[hsl(var(--amber-500))]" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/70">
                        Company Info
                      </p>
                      <p className="mt-2 text-2xl font-semibold text-[hsl(var(--navy-950))]">
                        BridgeChina
                      </p>
                      <p className="mt-2 max-w-xl text-sm leading-7 text-muted-foreground">
                        China-based sourcing consultancy for technical imports,
                        supplier verification, OEM/ODM coordination, and export
                        support.
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <div className="rounded-[1.5rem] border border-border/70 bg-[hsl(var(--sand-100))]/90 p-5">
                      <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-primary shadow-sm">
                          <MapPin className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary/75">
                            Address
                          </p>
                          <p className="mt-2 text-sm leading-7 text-[hsl(var(--navy-950))]/85">
                            {companyAddress}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-[1.5rem] border border-border/70 bg-white p-5">
                        <div className="flex items-start gap-4">
                          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                            <Map className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary/75">
                              Phone
                            </p>
                            <p className="mt-2 text-lg font-semibold text-[hsl(var(--navy-950))]">
                              +86 132 6598 0063
                            </p>
                            <p className="mt-1 text-sm text-muted-foreground">
                              Business line and WhatsApp contact
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-[1.5rem] border border-border/70 bg-white p-5">
                        <div className="flex items-start gap-4">
                          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                            <Mail className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary/75">
                              Email
                            </p>
                          <p className="mt-2 break-words text-lg font-semibold text-[hsl(var(--navy-950))]">
                            hello@bridgechina.example
                          </p>
                            <p className="mt-1 text-sm text-muted-foreground">
                              For structured sourcing briefs and documentation
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </MotionDiv>

            <div className="grid gap-6">
              <MotionDiv
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: 0.05 }}
              >
                <Card className="consulting-card">
                  <CardContent className="space-y-5 p-6">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[hsl(var(--navy-950))] text-white">
                        <QrCode className="h-5 w-5 text-[hsl(var(--amber-500))]" />
                      </div>
                      <div>
                        <p className="text-lg font-semibold text-[hsl(var(--navy-950))]">
                          QR code placeholder
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Replace with your WeChat or contact QR asset.
                        </p>
                      </div>
                    </div>
                    <div className="rounded-[1.6rem] border border-dashed border-border bg-[linear-gradient(180deg,rgba(250,243,242,0.94),rgba(255,255,255,0.88))] p-6">
                      <div className="flex aspect-square items-center justify-center rounded-[1.25rem] border border-border/70 bg-white">
                        <div className="text-center">
                          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/70">
                            Placeholder
                          </p>
                          <p className="mt-2 text-lg font-semibold text-[hsl(var(--navy-950))]">
                            Contact QR
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </MotionDiv>

              <MotionDiv
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: 0.1 }}
              >
                <Card className="consulting-card">
                  <CardContent className="space-y-5 p-6">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[hsl(var(--navy-950))] text-white">
                        <Map className="h-5 w-5 text-[hsl(var(--electric-400))]" />
                      </div>
                      <div>
                        <p className="text-lg font-semibold text-[hsl(var(--navy-950))]">
                          Map placeholder
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Insert your embedded map or location image here.
                        </p>
                      </div>
                    </div>
                    <div className="rounded-[1.6rem] border border-border/70 bg-[linear-gradient(135deg,rgba(67,11,20,0.06),rgba(215,38,79,0.08))] p-4">
                      <div className="flex min-h-[220px] items-center justify-center rounded-[1.25rem] border border-dashed border-primary/25 bg-white/70">
                        <div className="text-center">
                          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/70">
                            Placeholder
                          </p>
                          <p className="mt-2 text-lg font-semibold text-[hsl(var(--navy-950))]">
                            Guangzhou Map
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </MotionDiv>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
            <MotionDiv
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45 }}
            >
              <div className="panel-dark h-full overflow-hidden p-6 sm:p-8">
                <div className="flex h-full flex-col">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-[1.35rem] bg-white/10 text-white">
                      <MessageCircle className="h-6 w-6 text-[hsl(var(--amber-500))]" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/60">
                        WhatsApp contact
                      </p>
                      <p className="mt-2 text-2xl font-semibold text-white">
                        Fast channel for time-sensitive sourcing questions
                      </p>
                    </div>
                  </div>
                  <p className="mt-5 text-sm leading-7 text-white/[0.72]">
                    Use WhatsApp for quick introductions, urgent product
                    inquiries, and early-stage qualification before sending a
                    full sourcing brief.
                  </p>
                  <div className="mt-6 rounded-[1.4rem] border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center gap-3 text-white">
                      <Phone className="h-4 w-4 text-[hsl(var(--electric-400))]" />
                      <span className="font-medium">+86 132 6598 0063</span>
                    </div>
                  </div>
                  <div className="mt-auto pt-6">
                    <Button asChild className="w-full sm:w-auto">
                      <Link href="https://wa.me/8613265980063" target="_blank" rel="noreferrer">
                        Open WhatsApp
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: 0.05 }}
            >
              <Card className="consulting-card h-full">
                <CardContent className="flex h-full flex-col justify-between p-6 sm:p-8">
                  <div className="space-y-4">
                    <p className="eyebrow">Inquiry CTA</p>
                    <h2 className="display-lg text-balance">
                      Prefer a structured intake instead of a quick message?
                    </h2>
                    <p className="body-lg max-w-2xl">
                      Open the inquiry drawer to send your sourcing request,
                      project details, volume expectations, and product
                      requirements through the same intake flow used on the
                      homepage.
                    </p>
                  </div>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <InquiryTrigger size="lg" className="w-full sm:w-auto">
                      Send Inquiry
                      <Send className="ml-2 h-4 w-4" />
                    </InquiryTrigger>
                    <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto">
                      <Link href="/">Back to homepage</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </MotionDiv>
          </div>
        </div>
      </section>
    </>
  );
}
