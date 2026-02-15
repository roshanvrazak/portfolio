import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Roshan Razak | Software Developer",
  description:
    "Software developer specializing in Java,Spring Boot, TypeScript, AWS and DevOps.",
  openGraph: {
    title: "Roshan Razak | Software Developer",
    description:
      "Software developer specializing in Java, Spring Boot, TypeScript, AWS and Devops. Experienced in building scalable, high-performance applications.",
    url: "https://roshanvrazak.co.uk",
    type: "website", 
    locale: "en_GB",
  },};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable}`} suppressHydrationWarning>
      <body
        className={`${outfit.className} w-screen min-h-screen m-0 p-0 overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
