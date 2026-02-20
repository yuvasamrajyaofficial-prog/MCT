import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import CursorEffect from "@/components/CursorEffect";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import TransitionProvider from "@/components/TransitionProvider";
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
  title: "Prabas Digital | AI-Powered Digital Marketing Agency",
  description:
    "Prabas Digital — Premium digital marketing, website development, AI solutions, and brand strategy for businesses that demand results.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${inter.variable}`}>
        <CursorEffect />
        <Navbar />
        <WhatsAppButton />
        <TransitionProvider>
          {children}
          <Footer />
        </TransitionProvider>
        <Analytics />
      </body>
    </html>
  );
}
