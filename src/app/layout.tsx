import type { Metadata } from "next";
import { ImageLightbox } from "@/components/image-lightbox";
import { LanguageProvider } from "@/components/language-provider";
import { PersistentFloatingControls } from "@/components/persistent-floating-controls";
import { SecretSnakeHotkey } from "@/components/secret-snake-hotkey";
import { SiteLoader } from "@/components/site-loader";
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
    <html lang="en" suppressHydrationWarning>
      <body>
        <LanguageProvider>
          <SiteLoader />
          <a className="skip-link" href="#content">
            Skip to content
          </a>
          <main id="content">{children}</main>
          <ImageLightbox />
          <PersistentFloatingControls />
          <SecretSnakeHotkey />
        </LanguageProvider>
      </body>
    </html>
  );
}
