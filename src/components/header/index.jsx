import insta from "@/assets/menu/insta_menu.svg";
import logo from "@/assets/menu/logo.svg";
import open from "@/assets/menu/menu.svg";
import close from "@/assets/menu/menu_fechar.svg";
import whats from "@/assets/menu/whats_menu.svg";
import Image from "next/image";
import { useState } from "react";

import { EMAIL, INSTA_LINK, PHONE, WHATS_LINK } from "@/utils/links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import s from "./header.module.scss";

const links = [
  {
    name: "Dra. Dafne Oliveira",
    href: "#dr-dafne",
  },
  {
    name: "A clínica",
    href: "#clinica",
  },
  {
    name: "Serviços",
    href: "#servicos",
  },
  {
    name: "Como chegar",
    href: "#como-chegar",
  },
  {
    name: "Agendar sua consulta",
    href: "#agendar",
  },
];

const Header = () => {
  const route = usePathname();
  const isHome = route === "/";
  const [isOpen, setIsOpen] = useState(false);

  
  const scrollSmooth = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href").replace("/", "");
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div id='header' className={`${s.container}`}>
      <header className={`container ${s.header}`}>
        <Image
          src={logo}
          alt='Dafne Oliveira'
          width={397}
          height={40}
          className={s.logo}
        />
        <div className={`${s.menu} ${isOpen ? s.open : ""}`}>
          {!isOpen && (
            <button
              onClick={() => setIsOpen(true)}
              className={`${s.button} ${s.open}`}
            >
              <Image src={open} alt='abrir menu' />
            </button>
          )}
          {isOpen && (
            <nav className={`${s.nav} container`}>
              <button
                onClick={() => setIsOpen(false)}
                className={`${s.button} ${s.close}`}
              >
                <Image src={close} alt='fechar menu' />
              </button>
              <ul className={s.list}>
                {links.map(({ name, href }) => (
                  <li key={name}>
                    <Link
                      href={isHome ? href : "/" + href}
                      onClick={(e) => {
                        scrollSmooth(e);
                        setIsOpen(false);
                      }}
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
