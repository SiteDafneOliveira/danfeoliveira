import Header from "@/components/header";
import UseTerms from "@/components/useTerms";
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Termos de uso - Instituto Dafne Oliveira</title>
      </Head>
      <Header />
      <UseTerms />
    </>
  );
}
