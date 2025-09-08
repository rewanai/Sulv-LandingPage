"use client";

import { cn } from "@/lib/utils";
import React from "react";

export const Logo = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ className, children, ...props }, ref) => {
  return (
    <a
      ref={ref}
      className={cn(
        "flex items-center gap-2 text-foreground transition-colors hover:text-primary",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
});
Logo.displayName = "Logo";

export const LogoImage = React.forwardRef<
  HTMLImageElement,
  React.ImgHTMLAttributes<HTMLImageElement>
>(({ className, ...props }, ref) => (
  <img ref={ref} className={cn("max-h-8", className)} {...props} />
));
LogoImage.displayName = "LogoImage";

export const LogoText = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn("text-lg font-semibold tracking-tighter", className)}
    {...props}
  />
));
LogoText.displayName = "LogoText";
