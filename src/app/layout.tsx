import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import type { Metadata } from "next";


export const metadata: Metadata = {
  icons: {
    icon:'/photos/bcalogo.webp'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
