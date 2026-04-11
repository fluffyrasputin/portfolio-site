import type { Metadata } from "next";
import { BottomSigns } from "@/components/bottom-signs";
import { LanguageProvider } from "@/components/language-provider";
import { SiteLoader } from "@/components/site-loader";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Andrey Portfolio",
  description: "Portfolio website built from Figma with Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body>
        <LanguageProvider>
          <SiteLoader />
          <a className="skip-link" href="#content">
            Skip to content
          </a>
          <SiteHeader />
          <main id="content">{children}</main>
          <BottomSigns />
        </LanguageProvider>
      </body>
    </html>
  );
}
