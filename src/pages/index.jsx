import HomePage from "@/components/home";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export default function Home() {
  return <HomePage />;
}
