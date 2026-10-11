import type { Metadata } from "next";
import { Inter, Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { site } from "@/lib/content";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"] });
const jakarta = Plus_Jakarta_Sans({ variable: "--font-jakarta", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} · AI and future skills for schools`, template: `%s · ${site.name}` },
  description: site.description,
  openGraph: { siteName: site.name, type: "website", locale: "en_IN", images: ["/brand/logo-lockup.jpg"] },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${playfair.variable} ${jakarta.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-navy-900 focus:px-4 focus:py-2 focus:text-cream-50">
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
