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

import { ThemeProvider } from "@/components/ThemeProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${inter.variable}`}>
        <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem={false}>
          <CursorEffect />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
