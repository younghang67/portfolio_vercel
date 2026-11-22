import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import GeneralHeader from "../components/header/GeneralHeader";
import GeneralFooter from "../components/footer/GeneralFooter";
import CursorTracker from "@/components/ui/CursorTracker";
import { SITE_URL } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Rusan Limbu | Full Stack Developer",
    template: "%s | Rusan Limbu",
  },

  description: "I'm Rusan, a full stack developer who builds product-focused web applications from interface to server.",

  applicationName: "Rusan Limbu Portfolio",

  authors: [{ name: "Rusan Limbu", url: SITE_URL }],

  creator: "Rusan Limbu",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Rusan Limbu",
    title: "Rusan Limbu | Full Stack Developer",
    description: "Building modern, scalable web applications with modern frontend and backend technologies.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rusan Limbu - Full Stack Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Rusan Limbu | Full Stack Developer",
    description: "Full Stack Developer building modern web applications.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          <CursorTracker />
          <GeneralHeader />
          {children}
          <GeneralFooter />
        </Providers>
      </body>
    </html>
  );
}
