"use client";

import type { ReactNode } from "react";
import { useInquiryDrawer } from "@/components/inquiry/inquiry-provider";
import { Button, type ButtonProps } from "@/components/ui/button";

type InquiryTriggerProps = ButtonProps & {
  children: ReactNode;
};

export function InquiryTrigger({
  children,
  onClick,
  ...props
}: InquiryTriggerProps) {
  const { setOpen } = useInquiryDrawer();

  return (
    <Button
      {...props}
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) {
          setOpen(true);
        }
      }}
    >
      {children}
    </Button>
  );
}
