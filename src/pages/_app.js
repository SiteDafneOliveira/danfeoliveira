import Footer from "@/components/footer";
import Header from "@/components/header";
import Whats from "@/components/whats";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Instituto Dafne Oliveira</title>
        <meta
          name='description'
          content='Rumo a suamelhor versão Nosso maior objetivo é te ajudar aatingir o melhor de você mesmo,de maneira estratégica, individualizada,equilibrada e saudável.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        <Header />
        <Component {...pageProps} />
        <Footer />
        <Whats />
      </div>
    </>
  );
}
