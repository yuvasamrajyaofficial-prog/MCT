import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import CursorEffect from "@/components/CursorEffect";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "PraBaS & Co. | The Digital Enlightenment",
  description:
    "Pioneering AI solutions for Education, Mental Wellness, and Human Potential.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${inter.variable}`}>
        <CursorEffect />
        {children}
        <Footer />
      </body>
    </html>
  );
}
