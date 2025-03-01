import Image from "next/image";
import { useState } from "react";
import logo from "../../../assets/menu/logo.svg";
import open from "../../../assets/menu/menu.svg";
import close from "../../../assets/menu/menu_fechar.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <Image src={logo} alt='Dafne Oliveira' width={397} height={40} />
      <div>
        {!isOpen && (
          <button onClick={() => setIsOpen(true)}>
            <Image src={open} />
          </button>
        )}
        {isOpen && (
          <nav>
            <button onClick={() => setIsOpen(false)}>
              <Image src={close} />
            </button>
            <ul>
              <li>
                <a href='#sobre'>Sobre</a>
              </li>
              <li>
                <a href='#servicos'>Serviços</a>
              </li>
              <li>
                <a href='#contato'>Contato</a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
