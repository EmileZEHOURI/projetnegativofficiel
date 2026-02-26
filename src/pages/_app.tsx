import "@/styles/globals.css";
import "leaflet/dist/leaflet.css";
import { Anton, Inter } from "next/font/google";
import type { AppProps } from "next/app";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

export default function App({ Component, pageProps }: AppProps) {
  return(
    <div className={`${anton.variable} ${inter.variable}`}>
      <Component {...pageProps} />
    </div>
  ) 
}
