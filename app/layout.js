import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import CursorEffect from "@/components/CursorEffect";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import TransitionProvider from "@/components/TransitionProvider";
import ThemeProvider from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/next";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Malola Cosmic Tech (MCT) | Enterprise Retail OS & Deep Tech Ventures",
  description:
    "Malola Cosmic Tech (MCT) — Engineering the future of offline-first enterprise retail (MCT Retail), spatial 3D systems, and next-generation AI platforms. Founded by Prashant Hiremath.",
  keywords: [
    "Malola Cosmic Tech",
    "MCT",
    "MCT Retail",
    "3D POS",
    "Retail Operating System",
    "Offline POS",
    "Deep Tech India",
    "Prashant Hiremath",
    "Startup Fundraising",
    "Seed Round",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${inter.variable}`}>
        <ThemeProvider>
          <CursorEffect />
          <Navbar />
          <WhatsAppButton />
          <TransitionProvider>
            {children}
            <Footer />
          </TransitionProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
