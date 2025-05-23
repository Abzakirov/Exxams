import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/header/Header";
import { ToastProvider } from "@/providers/ToastProvider";
import { integralCF, satoshi } from "@/font/Font";
import Footer from "@/components/footer/Footer";
import ReduxProvider from "@/providers/reduxProvider";
import NewsletterSubscribe from "@/components/subscribe/Subscribe";

export const metadata: Metadata = {
  title: "Shop App",
  description: "Generated by shop magazine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${integralCF.className} ${satoshi.className}`}
    >
      <body className="antialiased min-h-screen flex flex-col ">
        <ReduxProvider>
          <ToastProvider />
          <Header />
          <main className="flex-grow">{children}</main>
          <NewsletterSubscribe />
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
