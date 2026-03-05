import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "../globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/providers/theme-provider";
import { WebLLMProvider } from "@/providers/web-llm-provider";
import { Suspense } from "react";

const metainfo = {
  name: "Mind",
  title: "Mind",
  description: "Chat with web-llm models in the browser",
  url: "https://mind-ai.vercel.app",
  icons: {
    icon: "/favicon-32x32.png",
  },
  image: "/metaimg.jpg",
};

export const metadata: Metadata = {
  metadataBase: new URL(metainfo.url),
  title: {
    default: metainfo.name,
    template: "%s - " + metainfo.name,
  },
  description: metainfo.description,
  authors: [
    {
      name: "Krishna Shahane",
      url: "https://github.com/krishnashahane",
    },
  ],
  openGraph: {
    type: "website",
    title: metainfo.name,
    url: metainfo.url,
    description: metainfo.description,
    images: [metainfo.image],
    siteName: metainfo.name,
  },
  twitter: {
    card: "summary_large_image",
    site: metainfo.url,
    title: metainfo.name,
    description: metainfo.description,
    images: [metainfo.image],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <WebLLMProvider>
          <ThemeProvider attribute="class" defaultTheme="system">
            <Suspense>
              {children}
            </Suspense>
            <Toaster position="top-right" />
          </ThemeProvider>
        </WebLLMProvider>
      </body>
    </html>
  );
}
