import { Html, Head, Main, NextScript } from "next/document";
import { Montserrat, Montserrat_Underline } from "next/font/google";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const montserratUnderline = Montserrat_Underline({
  variable: "--font-montserrat-underline",
  subsets: ["latin"],
});

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="font-montserrat">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
