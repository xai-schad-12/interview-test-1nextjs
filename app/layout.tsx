import type { Metadata, Viewport } from "next"
import "./globals.css"
import { ReactNode } from "react"

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "Sque — Stripe‑quality messaging landing",
    template: "%s · Sque"
  },
  description: "A Stripe-inspired landing page for Sque, showcasing modern messaging infrastructure with performance, accessibility, and SEO baked in.",
  keywords: ["Sque", "Stripe", "Messaging", "Inboxes", "APIs", "Webhooks"],
  openGraph: {
    title: "Sque — Modern Messaging Infrastructure",
    description: "Built with Next.js App Router, Tailwind, and framer-motion.",
    url: "/",
    siteName: "Sque",
    images: [{ url: "/images/og.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Sque — Modern Messaging Infrastructure",
    description: "Stripe‑inspired landing built with performance in mind.",
    images: ["/images/og.jpg"]
  },
  alternates: {
    canonical: "/"
  }
}

export const viewport: Viewport = {
  themeColor: "#0f1226"
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  )
}
