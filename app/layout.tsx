import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/providers/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "O'lchov birliklari konvertori — Uzunlik, og'irlik, maydon | olchov.uz",
  description:
    "Dyuym, santimetr, metr, kg, funt, sotix, gektar va boshqalarni onlayn aylantiring. Bepul va tez — olchov.uz",
  icons: {
    icon: [{ url: "/metaimage.jpg", type: "image/jpeg" }],
    apple: [{ url: "/metaimage.jpg", type: "image/jpeg" }],
    shortcut: "/metaimage.jpg",
  },
  openGraph: {
    title: "O'lchov birliklari konvertori — Uzunlik, og'irlik, maydon | olchov.uz",
    description:
      "Dyuym, santimetr, metr, kg, funt, sotix, gektar va boshqalarni onlayn aylantiring. Bepul va tez — olchov.uz",
    images: [
      {
        url: "/metaimage.jpg",
        width: 1200,
        height: 630,
        alt: "O'lchov birliklari konvertori",
      },
    ],
    type: "website",
    siteName: "olchov.uz",
  },
  twitter: {
    card: "summary_large_image",
    title: "O'lchov birliklari konvertori — Uzunlik, og'irlik, maydon | olchov.uz",
    description:
      "Dyuym, santimetr, metr, kg, funt, sotix, gektar va boshqalarni onlayn aylantiring. Bepul va tez — olchov.uz",
    images: ["/metaimage.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="uz"
      suppressHydrationWarning
      className="bg-white text-gray-900 dark:bg-gray-950 dark:text-white"
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-950 text-gray-900 dark:text-white font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
