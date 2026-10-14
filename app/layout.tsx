import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://daily-news-vgl.vercel.app"),
  title: "Radar Logístico Global | Vector Global Logistics",
  description: "Noticias, riesgos y recomendaciones para la cadena de suministro global, por Vector Global Logistics.",
  applicationName: "Vector Global Logistics",
  icons: {
    icon: "/Vector Logo White (1).png",
    apple: "/Vector Logo White (1).png",
  },
  openGraph: {
    type: "website",
    url: "https://daily-news-vgl.vercel.app",
    siteName: "Vector Global Logistics",
    title: "Radar Logístico Global | Vector Global Logistics",
    description: "Actualización logística: riesgos, impacto en operaciones y acciones recomendadas.",
    images: [{ url: "/Vector Logo White (1).png", alt: "Vector Global Logistics" }],
    locale: "es_MX",
  },
  twitter: {
    card: "summary_large_image",
    title: "Radar Logístico Global | Vector Global Logistics",
    description: "Noticias y riesgos logísticos globales.",
    images: ["/Vector Logo White (1).png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
