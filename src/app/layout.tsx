import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/css/index.css";
import "@wellspr/react-quill-editor/style.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "New Blog App",
  description: "A blog application build with Next",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Main>
          {children}
        </Main>
        <Footer />
      </body>
    </html>
  );
}
