import Header from "@/components/header";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Montserrat, Montserrat_Underline } from "next/font/google";
import Head from "next/head";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const montserratUnderline = Montserrat_Underline({
  variable: "--font-montserrat-underline",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta
          name='description'
          content='Rumo a suamelhor versão Nosso maior objetivo é te ajudar aatingir o melhor de você mesmo,de maneira estratégica, individualizada,equilibrada e saudável.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={`${montserrat.variable} ${montserratUnderline.variable}`}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
