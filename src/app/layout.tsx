import type { Metadata } from "next";
import "./globals.css";
import { ShaderAnimation } from "@/components/ui/shader-animation";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

export const metadata: Metadata = {
  title: "Dev Dharshan L — Java & AI-Focused Software Developer",
  description:
    "Pre-final year CSE student at Panimalar Engineering College specializing in Java backends and AI. Builder of SafeStruct — an IoT structural health monitoring system.",
  keywords: [
    "Dev Dharshan",
    "Java Developer",
    "AI Engineer",
    "IoT",
    "SafeStruct",
    "CSE Student",
    "Chennai",
    "Portfolio",
  ],
  authors: [{ name: "Dev Dharshan L" }],
  creator: "Dev Dharshan L",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://devdharshan.dev",
    title: "Dev Dharshan L — Java & AI-Focused Software Developer",
    description:
      "Pre-final year CSE student specializing in Java and AI. Building intelligent infrastructure systems.",
    siteName: "Dev Dharshan L",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dev Dharshan L — Java & AI-Focused Software Developer",
    description:
      "Pre-final year CSE student specializing in Java and AI. Building intelligent infrastructure systems.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* Global animated background - persists across all routes */}
        <ShaderAnimation />
        
        {/* Smooth scroll provider */}
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
