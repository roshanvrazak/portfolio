import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Outfit } from "next/font/google";
import "./globals.css";
import { PointerBackground } from "@/components/pointer-background";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Roshan Razak | Full Stack AI Engineer",
  description:
    "Full-stack AI engineer and former technical team lead building secure AI applications, document search, and internal workflows.",
  openGraph: {
    title: "Roshan Razak | Full Stack AI Engineer",
    description:
      "Full-stack AI engineer building practical AI tools with Python, TypeScript, and cloud infrastructure.",
    url: "https://roshanvrazak.co.uk",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable}`} suppressHydrationWarning>
      <body className={`${outfit.className} min-h-screen m-0 p-0`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <PointerBackground />
          {children}
        </ThemeProvider>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
