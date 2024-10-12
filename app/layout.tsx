import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Navigator from "./components/layout/Navigator";
import UserNameInput from "./components/layout/UserNameInput";

export const metadata: Metadata = {
  title: "Pillme",
  description: "Do not forget to take your medicine",
  appleWebApp: {
    capable: true,
  },
  manifest: "/manifest.json",
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  icons: [{ rel: "icon", url: "/png/192icon.png", sizes: "192x192" }],
};

const SUSE = localFont({
  src: "./fonts/SUSE-VariableFont_wght.ttf",
  display: "swap",
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
        <UserNameInput />
        {children}
        <Navigator />
      </body>
    </html>
  );
}
