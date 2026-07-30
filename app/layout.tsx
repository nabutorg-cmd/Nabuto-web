import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: { default: "NABUTO", template: "%s | NABUTO" },
  description: "Neslin aslıyla buluştuğu uygulama ve tefekkür ortamları.",
  metadataBase: new URL("https://www.nabuto.org"),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
