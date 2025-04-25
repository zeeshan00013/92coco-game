import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://92cocogame.live"),

  title: {
    default:
      "92 Coco Game Earn Real Money Download for Android & iOS | 92COCO pk 2025",
    template: "%s | 92coco",
  },
  description:
    "92 Coco Game Pakistan best online gaming app, offering real money reward Lottery and casino classics like card ,fishing with a user-friendly interface.",
  keywords: [
    "92 coco game ,92Coco ,coco 92,download 92coco game,92cocogame, Play 92 coco game,",
  ],
  author: "zeeshan",
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    description: "Best gambling game in pakistan today",
    url: "https://92cocogame.live",
    image: "./Images/coco.png",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitterhandle",
    title: "Create Next App",
    description: "Next.js app for building scalable applications",
    image: "/path/to/twitter-image.jpg",
  },
  alternates: {
    canonical: "https://www.92cocogame.live/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="index, follow" />
        <meta
          name="google-site-verification"
          content="cxSK82Q1VJEwmy6SRrcIfDyP2aEd765SRX97kejOKdg"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-b from-[#001a1a] to-[#020d0f] `}
        cz-shortcut-listen="true"
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
