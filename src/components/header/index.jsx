import Image from "next/image";
import { useState } from "react";
import insta from "../../../assets/menu/insta_menu.svg";
import logo from "../../../assets/menu/logo.svg";
import open from "../../../assets/menu/menu.svg";
import close from "../../../assets/menu/menu_fechar.svg";
import whats from "../../../assets/menu/whats_menu.svg";

import { INSTA_LINK, WHATS_LINK } from "@/utils/links";
import s from "./header.module.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={` ${s.container}`}>
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
                  <li>
                    <a href='#dr-dafne'>Dra. Dafne Oliveira</a>
                  </li>
                  <li>
                    <a href='#clinica'>A clínica</a>
                  </li>
                  <li>
                    <a href='#como-chegar'>Como chegar</a>
                  </li>
                  <li>
                    <a href='#agendar'>Agendar sua consulta</a>
                  </li>
                </ul>
                <div className={s.menu__bottom}>
                  <div className={s["menu__bottom--item"]}>
                    <p>Rua Fiandeiras, 306 - cj 102</p>
                    <p> Vila Olimpia</p>
                    <p>cep: 04545-001 São Paulo - SP</p>
                  </div>
                  <div className={s["menu__bottom--item"]}>
                    <p>Contato</p>
                    <p>(11) 99999-9999</p>
                    <p>contato@dafneoliveira.com.br</p>
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
