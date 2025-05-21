import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster"
import { Particles } from "../components/ui/sparkles";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vikash Khati - Full Stack Developer | Portfolio",
  description: "Vikash Khati: Full-stack web developer with expertise in Next.js, TypeScript, and Tailwind CSS. View my portfolio showcasing innovative web applications, professional experience, and technical skills.",
  keywords: "Vikash Khati, Full Stack Developer, Web Developer, Next.js Developer, TypeScript, React Developer, Software Engineer, Portfolio",
  robots: "index, follow",
  openGraph: {
    title: "Vikash Khati - Full Stack Developer | Portfolio",
    description: "Vikash Khati: Full-stack web developer with expertise in Next.js, TypeScript, and Tailwind CSS. View my portfolio showcasing innovative web applications.",
    type: "website",
    locale: "en_US",
    siteName: "Vikash Khati Portfolio"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vikash Khati - Full Stack Developer | Portfolio",
    description: "Full-stack web developer specializing in Next.js, TypeScript, and modern web technologies."
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
         <Particles className="fixed inset-0 w-full h-full z-[-1]"/>
      {/* <TwinklingStarsBackground /> */}
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
