import type { Metadata, Viewport } from "next";
import { Fraunces } from "next/font/google";
import "./globals.scss";
import { LanguageProvider } from "@/contexts/LanguageContext";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "AutoMates - Expert Automation Solutions",
  description: "Transform your business operations with intelligent automation",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable}`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
