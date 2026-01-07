import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Haven City Church - Welcome Home",
    template: "%s | Haven City Church",
  },
  description:
    "Join us at Haven City Church as we pursue God, love people, and transform our city. Experience powerful worship, biblical teaching, and authentic community.",
  keywords: [
    "church",
    "Haven City Church",
    "Port Harcourt church",
    "Christian community",
    "worship",
    "bible study",
    "Sunday service",
    "faith",
    "Nigeria church",
  ],
  authors: [{ name: "Haven City Church" }],
  creator: "Haven City Church",
  publisher: "Haven City Church",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://havencitychurch.org"), // Replace with your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Haven City Church - Welcome Home",
    description:
      "Join us at Haven City Church as we pursue God, love people, and transform our city.",
    url: "https://havencitychurch.org",
    siteName: "Haven City Church",
    images: [
      {
        url: "/og-image.jpg", // Add your OpenGraph image
        width: 1200,
        height: 630,
        alt: "Haven City Church",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Haven City Church - Welcome Home",
    description:
      "Join us at Haven City Church as we pursue God, love people, and transform our city.",
    images: ["/og-image.jpg"], // Add your Twitter card image
    creator: "@havencitychurch", // Replace with your Twitter handle
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
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Fonts - Add if needed */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Church",
              name: "Haven City Church",
              description:
                "A community of believers passionate about sharing the love of Christ",
              url: "https://havencitychurch.org",
              telephone: "+234-123-456-7890",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Church Street",
                addressLocality: "Port Harcourt",
                addressRegion: "Rivers State",
                addressCountry: "NG",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "4.8156",
                longitude: "7.0498",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Sunday",
                  opens: "09:00",
                  closes: "12:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Wednesday",
                  opens: "18:30",
                  closes: "20:00",
                },
              ],
              sameAs: [
                "https://www.facebook.com/havencitychurch",
                "https://www.instagram.com/havencitychurch",
                "https://www.youtube.com/@havencitychurch",
                "https://twitter.com/havencitychurch",
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased text-slate-800 bg-white flex flex-col min-h-screen">
        <Navbar />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
