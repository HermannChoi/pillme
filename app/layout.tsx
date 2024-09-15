import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CoverPage from "./components/CoverPage";

export const metadata: Metadata = {
  title: "Take Medicine",
  description: "Do not forget to take your medicine",
};

const SUSE = localFont({
  src: "./fonts/SUSE-VariableFont_wght.ttf",
  variable: "--font-SUSE",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${SUSE.variable} system-ui`}>
      <body>
        <CoverPage />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
