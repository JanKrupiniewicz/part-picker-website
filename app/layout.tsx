import type { Metadata } from "next";
import localFont from "next/font/local";
import { Navbar } from "@/components/navbar";
import "./globals.css";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Pc Part Picker",
  description: "Build your own pc with the best parts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
