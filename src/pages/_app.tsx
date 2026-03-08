import "@/styles/globals.css";
import "leaflet/dist/leaflet.css";
import { Anton, Inter, Anybody } from "next/font/google";
import type { AppProps } from "next/app";

const anybody = Anybody({
  subsets: ["latin"],
  variable: "--font-anybody",
axes: ["wdth"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});


export default function App({ Component, pageProps }: AppProps) {
  return(
    <div className={`${anybody.variable} font-anybody`}>
      <Component {...pageProps} />
    </div>
  ) 
}
