import {
  Cormorant_Infant,
  Montserrat,
  Playfair_Display,
} from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
});

const cormorantInfant = Cormorant_Infant({
  subsets: ["latin"],
  variable: "--font-cormorant-infant",
});

export const metadata = {
  title: "Bonny",
  description: "Handmade unique jewelry by one artist.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${playfairDisplay.variable} ${cormorantInfant.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
