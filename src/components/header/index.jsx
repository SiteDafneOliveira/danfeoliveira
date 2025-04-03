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
              <Image src={open} />
            </button>
          )}
          {isOpen && (
            <nav className={`${s.nav} container`}>
              <button
                onClick={() => setIsOpen(false)}
                className={`${s.button} ${s.close}`}
              >
                <Image src={close} />
              </button>
              <ul className={s.list}>
                {links.map(({ name, href }, index) => (
                  <li key={index}>
                    <Link
                      href={isHome ? href : "/" + href}
                      onClick={() => {
                        setIsOpen(false);
                      }}
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className={s.menu__bottom}>
                <div className={s["menu__bottom--item"]}>
                  <p>Rua Fiandeiras, 306 - cj 102</p>
                  <p> Vila Olimpia</p>
                  <p>cep: 04545-001 São Paulo - SP</p>
                </div>
                <div className={s["menu__bottom--item"]}>
                  <p>Contato</p>
                  <a href={`tel:${PHONE}`}>(11) 99163 2603</a>
                  <a href={`mailto:${EMAIL}`}>contato@dafneoliveira.com.br</a>
                </div>
                <div className={`${s.menu__item} ${s.socials}`}>
                  <a href={INSTA_LINK} target='_blank' rel='noreferrer'>
                    <Image src={insta} />
                  </a>
                  <a href={WHATS_LINK} target='_blank' rel='noreferrer'>
                    <Image src={whats} />
                  </a>
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
