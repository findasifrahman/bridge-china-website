"use client";

import {
  createContext,
  type PropsWithChildren,
  useContext,
  useMemo,
  useState
} from "react";
import { MessageCircle, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle
} from "@/components/ui/sheet";

type InquiryContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const InquiryContext = createContext<InquiryContextValue | null>(null);

export function InquiryProvider({ children }: PropsWithChildren) {
  const [open, setOpen] = useState(false);
  const value = useMemo(() => ({ open, setOpen }), [open]);

  return (
    <InquiryContext.Provider value={value}>
      <Sheet open={open} onOpenChange={setOpen}>
        {children}
        <InquiryDrawer />
      </Sheet>
    </InquiryContext.Provider>
  );
}

export function useInquiryDrawer() {
  const context = useContext(InquiryContext);

  if (!context) {
    throw new Error("useInquiryDrawer must be used within InquiryProvider");
  }

  return context;
}

function InquiryDrawer() {
  return (
    <SheetContent
      side="right"
      className="w-full overflow-y-auto overscroll-contain sm:max-w-xl lg:max-w-2xl"
      aria-describedby="inquiry-description"
    >
      <div className="flex min-h-full flex-col">
        <div className="border-b border-border/80 bg-white/70 px-6 py-6 sm:px-8">
          <div className="mb-4 flex items-start justify-between gap-4 pr-12">
            <div className="rounded-2xl bg-[hsl(var(--navy-950))] p-3 text-white shadow-glow">
              <Sparkles className="h-5 w-5 text-[hsl(var(--amber-500))]" />
            </div>
          </div>
          <SheetHeader>
            <SheetTitle>Send Your Sourcing Request</SheetTitle>
            <SheetDescription id="inquiry-description">
              Share your product category, target specification, and order scope.
              We use this intake to assess supplier fit, technical complexity,
              and the right next step for your sourcing program.
            </SheetDescription>
          </SheetHeader>
        </div>

        <div className="flex-1 space-y-6 px-6 py-6 sm:px-8">
          <div className="rounded-[1.75rem] border border-[hsl(var(--electric-400))/0.2] bg-[hsl(var(--navy-950))] p-5 text-white">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.26em] text-white/55">
                  Fast lane
                </p>
                <p className="mt-2 text-lg font-semibold">
                  Prefer to discuss the request directly?
                </p>
                <p className="mt-2 text-sm leading-7 text-white/70">
                  Use WhatsApp for quick intake, urgent projects, or early
                  qualification questions.
                </p>
              </div>
              <Button asChild className="shrink-0 bg-white text-[hsl(var(--navy-950))] hover:bg-white/90">
                <a href="https://wa.me/8613265980063" target="_blank" rel="noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp Quick Action
                </a>
              </Button>
            </div>
          </div>

          <div className="surface-card overflow-hidden">
            <div className="border-b border-border/80 px-5 py-4">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                Google Form Embed
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Replace this placeholder with your live Google Form embed URL.
              </p>
            </div>
            <div className="p-5">
              <iframe
                title="BridgeChina inquiry form placeholder"
                srcDoc="<html><body style='margin:0;background:#f7f9fc;font-family:system-ui,sans-serif;display:flex;align-items:center;justify-content:center;height:100%;color:#465066;'><div style='max-width:320px;text-align:center;padding:24px;'><div style='font-size:12px;letter-spacing:.24em;text-transform:uppercase;color:#2f78ff;margin-bottom:12px;'>Embed Placeholder</div><div style='font-size:22px;font-weight:700;color:#0f1b38;margin-bottom:10px;'>Google Form Area</div><div style='font-size:14px;line-height:1.8;'>Paste your Google Form embed URL here when the live intake form is ready.</div></div></body></html>"
                loading="lazy"
                className="h-[280px] w-full rounded-[1.25rem] border border-dashed border-border bg-[hsl(var(--sand-100))]"
              />
            </div>
          </div>

          <div className="surface-card p-5 sm:p-6">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                  Fallback Lead Form
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  A premium mockup for your future embedded or connected lead
                  capture flow.
                </p>
              </div>
              <div className="rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Mockup
              </div>
            </div>

            <form className="grid gap-4" action="#">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" type="text" placeholder="Your full name" />
                <Field
                  label="Company"
                  type="text"
                  placeholder="Company or organization"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Email" type="email" placeholder="name@company.com" />
                <Field
                  label="Phone / WhatsApp"
                  type="text"
                  placeholder="+86 / +1 / international format"
                />
              </div>
              <Field
                label="Product category"
                type="text"
                placeholder="Renewable energy, robotics, lab equipment, OEM electronics..."
              />
              <Field
                label="Sourcing details"
                type="textarea"
                placeholder="Share product specs, certifications, destination market, priorities, or supplier issues."
              />
              <Field
                label="Quantity / project size"
                type="text"
                placeholder="Pilot batch, monthly demand, annual volume, or project budget"
              />
              <div className="flex flex-col gap-3 border-t border-border/70 pt-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs leading-6 text-muted-foreground">
                  This mockup is static. Connect it later to your live CRM, form
                  backend, or Google Form workflow.
                </p>
                <Button type="button">
                  <Send className="mr-2 h-4 w-4" />
                  Submit Inquiry
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </SheetContent>
  );
}

type FieldProps = {
  label: string;
  placeholder: string;
  type: "text" | "email" | "textarea";
};

function Field({ label, placeholder, type }: FieldProps) {
  const commonClassName =
    "mt-2 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/15";

  return (
    <label className="block text-sm font-medium text-[hsl(var(--navy-950))]">
      {label}
      {type === "textarea" ? (
        <textarea
          className={`${commonClassName} min-h-32 resize-y`}
          placeholder={placeholder}
          rows={5}
        />
      ) : (
        <input className={commonClassName} type={type} placeholder={placeholder} />
      )}
    </label>
  );
}
