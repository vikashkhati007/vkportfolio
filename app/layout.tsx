import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster"
import { SparklesCore } from "../components/ui/sparkles";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vikash Khati - Portfolio Website",
  description: "Vikash Khati: Full-stack web developer transforming ideas into exceptional web experiences with expertise in Next.js, TypeScript, and Tailwind CSS, dedicated to pushing the boundaries of innovation and delivering high-performance results.",
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
          <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={25}
        className="w-full h-full fixed -z-10"
        particleColor="#FFFFFF"
      />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
