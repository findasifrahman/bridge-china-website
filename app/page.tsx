import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  ChevronDown,
  CircleHelp,
  ClipboardCheck,
  Cpu,
  Factory,
  FlaskConical,
  PackageCheck,
  RadioTower,
  ScanSearch,
  ShieldCheck,
  Sparkles,
  SunMedium,
  Truck,
  Waypoints
} from "lucide-react";
import { LogoLockup } from "@/components/brand/logo-lockup";
import { InquiryTrigger } from "@/components/inquiry/inquiry-trigger";
import { MotionDiv } from "@/components/motion/motion-div";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  bridgeChinaAdvantages,
  faqs,
  heroHelperSteps,
  heroHighlights,
  planComparisonRows,
  processSteps,
  services,
  sourcedCategories,
  sourcingChallenges,
  trustStrip
} from "@/data/site";

const categoryIcons = [
  SunMedium,
  Factory,
  FlaskConical,
  RadioTower,
  Cpu,
  Sparkles
] as const;

const serviceIcons = [
  ScanSearch,
  ShieldCheck,
  ClipboardCheck,
  PackageCheck,
  Sparkles,
  Truck
] as const;

const challengeIcons = [ScanSearch, Waypoints, ShieldCheck, Truck] as const;

function SectionLead({
  eyebrow,
  title,
  description
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="section-header">
      <p className="section-kicker">{eyebrow}</p>
      <h2 className="section-title text-balance">{title}</h2>
      <p className="section-copy text-balance">{description}</p>
    </div>
  );
}

function ComparisonValue({
  value,
  positive = false
}: {
  value: string;
  positive?: boolean;
}) {
  return (
    <span
      className={[
        "inline-flex rounded-full px-3 py-1 text-sm font-semibold",
        positive
          ? "bg-[hsl(var(--electric-500))]/10 text-[hsl(var(--electric-500))]"
          : "bg-[hsl(var(--sand-100))] text-[hsl(var(--navy-950))]"
      ].join(" ")}
    >
      {value}
    </span>
  );
}

const helperStepColors = [
  "bg-[rgba(44,91,214,0.12)] text-[hsl(var(--electric-500))]",
  "bg-[rgba(19,178,168,0.14)] text-[hsl(var(--electric-400))]",
  "bg-[rgba(246,166,35,0.18)] text-[hsl(var(--amber-500))]",
  "bg-[rgba(234,87,95,0.14)] text-[hsl(var(--primary))]"
] as const;

export default function HomePage() {
  return (
    <>
      <section
        id="hero"
        className="relative overflow-hidden border-b border-border/60 bg-[linear-gradient(180deg,#fbfaf7_0%,#f4f3ef_100%)]"
      >
        <div className="absolute inset-0 technical-grid opacity-60" />
        <div className="absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle_at_top_left,rgba(44,91,214,0.12),transparent_42%),radial-gradient(circle_at_top_right,rgba(25,183,195,0.08),transparent_28%)]" />

        <div className="container-shell relative z-10 py-10 sm:py-14 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="flex items-center gap-3">
                <div className="relative h-11 w-11 overflow-hidden rounded-2xl border border-border/80 bg-white shadow-[0_8px_18px_rgba(18,34,67,0.08)]">
                  <Image
                    src="/brand-mark.svg"
                    alt="BridgeChina logo"
                    fill
                    className="object-cover"
                    sizes="44px"
                    priority
                  />
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[hsl(var(--electric-500))]">
                  BridgeChina
                </p>
              </div>

              <div className="space-y-5">
                <p className="eyebrow">China-based technical sourcing partner</p>
                <h1 className="display-xl max-w-4xl text-balance">
                  Source technical products from China with stronger supplier
                  validation and clearer execution.
                </h1>
                <p className="body-lg max-w-2xl text-balance">
                  BridgeChina supports global buyers sourcing renewable energy
                  systems, industrial machinery, lab equipment, servers,
                  robotics, and OEM electronics with factory-side discipline,
                  structured follow-up, and export coordination.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <InquiryTrigger size="lg" className="group w-full sm:w-auto">
                  Send Inquiry
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </InquiryTrigger>
                <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto">
                  <Link href="#plans">Compare engagement models</Link>
                </Button>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {heroHighlights.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-border/80 bg-white px-4 py-4 shadow-[0_10px_24px_rgba(18,34,67,0.05)]"
                  >
                    <p className="text-lg font-semibold text-[hsl(var(--navy-950))]">
                      {item.value}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
              className="surface-card relative overflow-hidden p-5 sm:p-6 lg:p-7"
            >
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(44,91,214,0.05),transparent_38%,rgba(25,183,195,0.05))]" />
              <div className="relative space-y-6">
                <div className="flex flex-col gap-4 border-b border-border/70 pb-5 sm:flex-row sm:items-start sm:justify-between">
                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[hsl(var(--electric-500))]">
                      Sourcing operations overview
                    </p>
                    <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-[hsl(var(--navy-950))] sm:text-[2.15rem]">
                      One coordinated view across supplier fit, quality control,
                      and shipment readiness.
                    </h2>
                  </div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[hsl(var(--electric-500))]/15 bg-[hsl(var(--electric-500))]/8 text-[hsl(var(--electric-500))]">
                    <Waypoints className="h-6 w-6" />
                  </div>
                </div>

                <div className="grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
                  <div className="rounded-[1.35rem] border border-border/80 bg-[linear-gradient(180deg,#ffffff,#f8f8f6)] p-5">
                    <div className="flex items-center justify-between border-b border-border/70 pb-4">
                      <div>
                        <p className="text-sm font-semibold text-[hsl(var(--navy-950))]">
                          Active sourcing lanes
                        </p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          Current workstreams kept visible for buyer teams.
                        </p>
                      </div>
                      <span className="rounded-full bg-[hsl(var(--electric-500))]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--electric-500))]">
                        Live view
                      </span>
                    </div>

                    <div className="mt-5 grid gap-3">
                      {[
                        {
                          label: "Supplier shortlist",
                          value: "12 factories screened",
                          status: "4 qualified for quotation"
                        },
                        {
                          label: "Technical alignment",
                          value: "BOM and spec review active",
                          status: "Tolerance and compliance clarified"
                        },
                        {
                          label: "Production controls",
                          value: "QC checkpoints defined",
                          status: "AQL 2.5 inspection path prepared"
                        }
                      ].map((item) => (
                        <div
                          key={item.label}
                          className="grid gap-2 rounded-2xl border border-border/70 bg-[hsl(var(--sand-50))] px-4 py-4 sm:grid-cols-[0.8fr_1.1fr]"
                        >
                          <p className="text-sm font-semibold text-[hsl(var(--navy-950))]">
                            {item.label}
                          </p>
                          <div className="space-y-1">
                            <p className="text-sm font-medium text-[hsl(var(--navy-950))]/88">
                              {item.value}
                            </p>
                            <p className="text-sm text-muted-foreground">{item.status}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <div className="rounded-[1.35rem] border border-border/80 bg-[hsl(var(--navy-950))] p-5 text-white">
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/60">
                        Procurement intelligence
                      </p>
                      <div className="mt-5 space-y-4">
                        {[
                          "Factory verification before commitment",
                          "Clear sample-to-batch quality planning",
                          "Export handoff tracked to dispatch"
                        ].map((item) => (
                          <div key={item} className="flex items-start gap-3">
                            <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-[hsl(var(--amber-500))]">
                              <Check className="h-3.5 w-3.5" />
                            </span>
                            <p className="text-sm leading-6 text-white/78">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-[1.35rem] border border-border/80 bg-white p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                        Sector coverage
                      </p>
                      <div className="mt-4 grid grid-cols-2 gap-3">
                        {[
                          "Energy systems",
                          "Industrial lines",
                          "Lab equipment",
                          "Servers",
                          "Robotics",
                          "OEM electronics"
                        ].map((item) => (
                          <div
                            key={item}
                            className="flex min-h-[5rem] items-center rounded-xl border border-border/70 bg-[hsl(var(--sand-50))] px-3 py-3 text-sm font-medium leading-6 text-[hsl(var(--navy-950))]/86"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </MotionDiv>
          </div>

          <div className="mt-8 surface-card p-3 sm:p-4">
            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
              {heroHelperSteps.map((step, index) => (
                <div
                  key={step}
                  className="flex items-start gap-4 rounded-2xl border border-border/70 bg-[hsl(var(--sand-50))] px-4 py-4"
                >
                  <div
                    className={[
                      "flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold",
                      helperStepColors[index]
                    ].join(" ")}
                  >
                    {index + 1}
                  </div>
                  <div>
                    <p
                      className={[
                        "text-sm font-semibold",
                        index === 0
                          ? "text-[hsl(var(--electric-500))]"
                          : index === 1
                            ? "text-[hsl(var(--electric-400))]"
                            : index === 2
                              ? "text-[hsl(var(--amber-500))]"
                              : "text-[hsl(var(--primary))]"
                      ].join(" ")}
                    >
                      {step}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      Structured checkpoints keep sourcing decisions connected to
                      QC and export readiness.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="trust-strip" className="py-8">
        <div className="container-shell">
          <div className="surface-card px-5 py-5 sm:px-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                Built for technical buyers and sourcing-led teams
              </p>
              <div className="flex flex-wrap gap-2.5">
                {trustStrip.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border/70 bg-[hsl(var(--sand-50))] px-4 py-2 text-sm font-medium text-[hsl(var(--navy-950))]/82"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="why-difficult" className="section-space-sm">
        <div className="container-shell section-shell section-stack">
          <SectionLead
            eyebrow="Why sourcing is hard"
            title="A low quote does not remove sourcing risk. It often hides where the real cost appears later."
            description="BridgeChina is built for projects where supplier selection, specification control, and quality follow-up matter as much as price."
          />

          <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="surface-card h-full p-6 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[hsl(var(--electric-500))]">
                Risk infographic
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[hsl(var(--navy-950))]">
                Most sourcing failures come from gaps between{" "}
                <span className="text-[hsl(var(--electric-500))]">quote</span>,{" "}
                <span className="text-[hsl(var(--electric-400))]">factory fit</span>,{" "}
                <span className="text-[hsl(var(--amber-500))]">production control</span>, and{" "}
                <span className="text-[hsl(var(--primary))]">shipment readiness</span>.
              </h3>

              <div className="mt-6 grid gap-4">
                {[
                  { step: "01", title: "Quote looks acceptable" },
                  { step: "02", title: "Factory fit is not fully tested" },
                  { step: "03", title: "Production quality drifts" },
                  { step: "04", title: "Shipping risk compounds delays" }
                ].map((item, index) => (
                  <div
                    key={item.step}
                    className="relative rounded-2xl border border-border/70 bg-[hsl(var(--sand-50))] p-4"
                  >
                    {index < 3 ? (
                      <div className="absolute left-[1.1rem] top-full h-4 border-l border-dashed border-border" />
                    ) : null}
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[hsl(var(--electric-500))]/10 text-sm font-semibold text-[hsl(var(--electric-500))]">
                        {item.step}
                      </div>
                      <p className="pt-2 text-sm font-medium text-[hsl(var(--navy-950))]/88">
                        {item.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {sourcingChallenges.map((challenge, index) => {
                const Icon = challengeIcons[index];

                return (
                  <Card key={challenge.title} className="h-full">
                    <CardContent className="flex h-full flex-col p-6">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[hsl(var(--electric-500))]/10 text-[hsl(var(--electric-500))]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <p className="mt-5 text-xl font-semibold tracking-tight text-[hsl(var(--navy-950))]">
                        {challenge.title}
                      </p>
                      <p className="mt-3 text-base leading-7 text-muted-foreground">
                        {challenge.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="what-we-source" className="section-space-sm">
        <div className="container-shell section-shell section-stack">
          <SectionLead
            eyebrow="What we source"
            title="Category intelligence for technical sourcing programs."
            description="Each category is approached as a procurement track with supplier screening, specification control, and production follow-through."
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {sourcedCategories.map((category, index) => {
              const Icon = categoryIcons[index];

              return (
                <MotionDiv
                  key={category.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                  className="h-full"
                >
                  <Card className="h-full border-[rgba(44,91,214,0.14)] bg-[linear-gradient(180deg,rgba(44,91,214,0.04),rgba(255,255,255,1))]">
                    <CardContent className="flex h-full flex-col p-6">
                      <div className="relative aspect-[16/9] overflow-hidden rounded-[1.25rem] border border-border/70 bg-[linear-gradient(135deg,rgba(22,42,86,0.98),rgba(44,91,214,0.92)_55%,rgba(25,183,195,0.82))] p-5 text-white">
                        <div className="absolute inset-0 technical-grid opacity-25" />
                        <div className="relative flex h-full flex-col justify-between">
                          <div className="flex items-start justify-between gap-4">
                            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/68">
                              Category overview
                            </p>
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/10">
                              <Icon className="h-6 w-6 text-[hsl(var(--amber-500))]" />
                            </div>
                          </div>
                          <div className="grid gap-3 sm:grid-cols-[1fr_0.72fr]">
                            <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
                              <p className="text-lg font-semibold leading-tight">
                                {category.imageLabel}
                              </p>
                              <p className="mt-2 text-sm leading-6 text-white/74">
                                Supplier evaluation, build practicality, and
                                export-fit review for this product group.
                              </p>
                            </div>
                            <div className="rounded-2xl border border-dashed border-white/20 bg-black/10 p-4">
                              <div className="flex h-full min-h-[5.75rem] items-end rounded-xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] px-3 py-3 text-sm text-white/64">
                                Media placeholder
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-1 flex-col pt-5">
                        <p className="text-xl font-semibold tracking-tight text-[hsl(var(--navy-950))]">
                          {category.title}
                        </p>
                        <p className="mt-3 text-base leading-7 text-muted-foreground">
                          {category.description}
                        </p>

                        <div className="mt-5 grid gap-2.5">
                          {category.samples.map((sample) => (
                            <div
                              key={sample}
                              className="flex items-start gap-3 rounded-xl border border-border/70 bg-[hsl(var(--sand-50))] px-4 py-3"
                            >
                              <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[hsl(var(--electric-500))]/10 text-[hsl(var(--electric-500))]">
                                <Check className="h-3.5 w-3.5" />
                              </div>
                              <p className="text-sm leading-6 text-[hsl(var(--navy-950))]/84">
                                {sample}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </MotionDiv>
              );
            })}
          </div>
        </div>
      </section>

      <section id="services" className="section-space-sm">
        <div className="container-shell section-shell section-stack">
          <SectionLead
            eyebrow="Our services"
            title="Hands-on sourcing support from supplier search to final shipment."
            description="We operate like a sourcing and execution partner for technical buyers who need cleaner decisions and more reliable follow-through."
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = serviceIcons[index];

              return (
                <MotionDiv
                  key={service.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                  className="h-full"
                >
                  <Card className="h-full">
                    <CardContent className="flex h-full flex-col p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[hsl(var(--electric-500))]/10 text-[hsl(var(--electric-500))]">
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className="rounded-full border border-border/70 bg-[hsl(var(--sand-50))] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                          {service.badge}
                        </span>
                      </div>

                      <p className="mt-5 text-xl font-semibold tracking-tight text-[hsl(var(--navy-950))]">
                        {service.title}
                      </p>
                      <p className="mt-3 text-base leading-7 text-muted-foreground">
                        {service.description}
                      </p>
                      <div className="mt-5 rounded-2xl border border-border/70 bg-[hsl(var(--sand-50))] p-4">
                        <p className="text-sm leading-6 text-[hsl(var(--navy-950))]/78">
                          {service.detail}
                        </p>
                      </div>
                      <div className="mt-auto pt-5">
                        <div className="flex items-center gap-3 text-sm font-medium text-[hsl(var(--navy-950))]">
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[hsl(var(--electric-500))]/10 text-[hsl(var(--electric-500))]">
                            <ArrowRight className="h-4 w-4" />
                          </span>
                          Structured support for buyer-side execution
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </MotionDiv>
              );
            })}
          </div>
        </div>
      </section>

      <section id="plans" className="section-space-sm">
        <div className="container-shell section-shell section-stack">
          <SectionLead
            eyebrow="Plans / Engagement models"
            title="Choose the sourcing model that fits your project."
            description="Some buyers want BridgeChina to source and manage the supplier network directly. Others already have a supplier and need follow-up, QC, and export support."
          />

          <div className="grid gap-5 lg:grid-cols-2">
            <Card className="h-full border-[hsl(var(--electric-500))]/20 bg-[linear-gradient(180deg,rgba(44,91,214,0.06),rgba(255,255,255,1))]">
              <CardContent className="flex h-full flex-col p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-2xl font-semibold tracking-tight text-[hsl(var(--navy-950))]">
                      Pro Plan
                    </p>
                    <p className="mt-2 text-base leading-7 text-muted-foreground">
                      We source through our supplier network
                    </p>
                  </div>
                  <span className="rounded-full bg-[hsl(var(--electric-500))] px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-white">
                    Recommended
                  </span>
                </div>
                <p className="mt-6 text-sm leading-6 text-[hsl(var(--navy-950))]/78">
                  Best for buyers who want BridgeChina to lead supplier
                  selection, qualification, and execution end-to-end.
                </p>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardContent className="flex h-full flex-col p-6">
                <p className="text-2xl font-semibold tracking-tight text-[hsl(var(--navy-950))]">
                  Basic Plan
                </p>
                <p className="mt-2 text-base leading-7 text-muted-foreground">
                  We support sourcing with your existing supplier
                </p>
                <p className="mt-6 text-sm leading-6 text-[hsl(var(--navy-950))]/78">
                  Best for buyers who already have a supplier and need follow-up,
                  QC, and shipping support from a China-based team.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="hidden overflow-hidden rounded-[1.5rem] border border-border/80 bg-white lg:block">
            <div className="grid grid-cols-[1.2fr_0.9fr_0.9fr] border-b border-border/80 bg-[hsl(var(--sand-50))]">
              <div className="px-6 py-5 text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                Comparison
              </div>
              <div className="px-6 py-5 text-sm font-semibold uppercase tracking-[0.24em] text-[hsl(var(--electric-500))]">
                Pro Plan
              </div>
              <div className="px-6 py-5 text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                Basic Plan
              </div>
            </div>
            {planComparisonRows.map((row, index) => (
              <div
                key={row.label}
                className={[
                  "grid grid-cols-[1.2fr_0.9fr_0.9fr] items-center",
                  index < planComparisonRows.length - 1 ? "border-b border-border/70" : ""
                ].join(" ")}
              >
                <div className="px-6 py-5 text-sm font-medium text-[hsl(var(--navy-950))]">
                  {row.label}
                </div>
                <div className="px-6 py-5">
                  <ComparisonValue value={row.pro} positive />
                </div>
                <div className="px-6 py-5">
                  <ComparisonValue value={row.basic} />
                </div>
              </div>
            ))}
          </div>

          <div className="grid gap-4 lg:hidden">
            {planComparisonRows.map((row) => (
              <Card key={row.label}>
                <CardContent className="p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                    {row.label}
                  </p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-[hsl(var(--electric-500))]/20 bg-[rgba(44,91,214,0.06)] p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--electric-500))]">
                        Pro Plan
                      </p>
                      <div className="mt-3">
                        <ComparisonValue value={row.pro} positive />
                      </div>
                    </div>
                    <div className="rounded-2xl border border-border/70 bg-[hsl(var(--sand-50))] p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                        Basic Plan
                      </p>
                      <div className="mt-3">
                        <ComparisonValue value={row.basic} />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="rounded-[1.35rem] border border-border/80 bg-[hsl(var(--sand-50))] px-5 py-5 text-sm leading-7 text-muted-foreground">
            Pro Plan is best for buyers who want BridgeChina to source and
            manage suppliers end-to-end. Basic Plan is best for buyers who
            already have a supplier and need follow-up, QC, and shipping
            support.
          </div>
        </div>
      </section>

      <section id="process" className="section-space-sm">
        <div className="container-shell section-shell section-stack">
          <SectionLead
            eyebrow="4-step import process"
            title="A simple operating model from requirement intake to shipped goods."
            description="The process stays disciplined so supplier qualification, quality planning, and export handoff remain connected."
          />

          <div className="grid gap-5 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <div key={step.number} className="relative h-full">
                {index < processSteps.length - 1 ? (
                  <div className="absolute left-[2.25rem] top-14 hidden h-px w-[calc(100%-1rem)] bg-border lg:block" />
                ) : null}
                <Card className="relative h-full">
                  <CardContent className="flex h-full flex-col p-6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[hsl(var(--electric-500))]/10 text-sm font-semibold text-[hsl(var(--electric-500))]">
                      {step.number}
                    </div>
                    <p className="mt-5 text-xl font-semibold tracking-tight text-[hsl(var(--navy-950))]">
                      {step.title}
                    </p>
                    <p className="mt-3 text-base leading-7 text-muted-foreground">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="why-bridgechina" className="section-space-sm">
        <div className="container-shell section-shell">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="space-y-5">
              <p className="section-kicker">Why BridgeChina</p>
              <h2 className="section-title mt-0 text-left text-balance">
                Built for technical sourcing decisions that need more than a
                supplier directory.
              </h2>
              <p className="body-lg max-w-xl text-balance">
                We combine local China-side access with international buyer-side
                clarity, so sourcing teams can move faster without losing
                control over quality, fit, and delivery.
              </p>
              <div className="grid gap-3">
                {[
                  "China-based supplier-side verification",
                  "Technical sourcing across industrial categories",
                  "Clear communication for overseas procurement teams"
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-[hsl(var(--electric-500))]/10 text-[hsl(var(--electric-500))]">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <p className="text-sm leading-6 text-[hsl(var(--navy-950))]/82">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              {bridgeChinaAdvantages.map((item) => (
                <Card className="border-[rgba(19,178,168,0.16)] bg-[linear-gradient(180deg,rgba(19,178,168,0.05),rgba(255,255,255,1))]" key={item.title}>
                  <CardContent className="flex flex-col gap-4 p-6 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-xl font-semibold tracking-tight text-[hsl(var(--navy-950))]">
                        {item.title}
                      </p>
                      <p className="mt-3 text-base leading-7 text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                    <span className="rounded-full bg-[hsl(var(--electric-500))]/10 px-4 py-2 text-sm font-semibold text-[hsl(var(--electric-500))]">
                      {item.metric}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="section-space-sm">
        <div className="container-shell section-shell section-stack">
          <SectionLead
            eyebrow="FAQ"
            title="Common questions from importers, OEM teams, and technical buyers."
            description="These are usually the first questions teams ask before moving from product brief to active sourcing."
          />

          <div className="grid gap-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-[1.25rem] border border-border/80 bg-white px-5 py-5"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-full bg-[hsl(var(--electric-500))]/10 text-[hsl(var(--electric-500))]">
                      <CircleHelp className="h-5 w-5" />
                    </div>
                    <p className="text-left text-lg font-semibold tracking-tight text-[hsl(var(--navy-950))]">
                      {faq.question}
                    </p>
                  </div>
                  <ChevronDown className="mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <p className="pl-14 pt-4 text-base leading-7 text-muted-foreground">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="final-cta" className="section-space">
        <div className="container-shell">
          <div className="surface-card relative overflow-hidden px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(44,91,214,0.05),transparent_45%,rgba(25,183,195,0.05))]" />
            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl space-y-4">
                <p className="section-kicker">Final CTA</p>
                <h2 className="heading-lg text-balance">
                  Need a sourcing partner in China for a technical product line?
                </h2>
                <p className="body-lg text-balance">
                  Send your product brief, target volume, and technical
                  requirements. BridgeChina can help you reduce supplier risk and
                  build a clearer path to production and export.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <InquiryTrigger size="lg" className="group w-full sm:w-auto">
                  Send Inquiry
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </InquiryTrigger>
                <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto">
                  <Link href="#what-we-source">Review sourcing categories</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
