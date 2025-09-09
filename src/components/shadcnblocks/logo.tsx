"use client";

import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";

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
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement> & {
    src: string;
    alt?: string;
    width?: number;
    height?: number;
  }
>(({ className, src, alt = "Company logo", width = 120, height = 40, ...props }, ref) => (
  <span
    ref={ref}
    className={cn("inline-block", className)}
    {...props}
  >
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="max-h-8 w-auto"
      priority
    />
  </span>
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
