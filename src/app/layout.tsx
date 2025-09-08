// src/app/layout.tsx
import '../assets/fonts/fonts.css';
import "./globals.css";

import { cn } from "@/lib/utils";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/*
          This is the correct way to import Google Fonts for a static export.
          The next/font module is incompatible with the assetPrefix setting.
          
          This link tag imports both Anton and Inter fonts directly,
          making them available without causing a build error.
        */}

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className={cn("min-h-screen bg-background font-sans antialiased")}>
        {children}
      </body>
    </html>
  );
}