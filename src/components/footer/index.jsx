import insta from "@/assets/footer/insta_bottom.svg";
import logo from "@/assets/footer/logo_bottom.svg";
import whats from "@/assets/footer/whats_bottom.svg";
import { EMAIL, INSTA_LINK, PHONE, WHATS_LINK } from "@/utils/links";
import Image from "next/image";
import Link from "next/link";
import s from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={`container ${s.container}`}>
        <p className={s.logo}>
          <Image
            src={logo}
            alt='Instituto Dafne Oliveira'
            width={209}
            height={42}
          />
        </p>
        <div className={s.content}>
          <div className={s.info}>
            <div className={s.item}>
              <p>Rua Fiandeiras, 306 - cj 102</p>
              <p>Vila Olimpia</p>
              <p>cep: 04545-001 São Paulo - SP</p>
            </div>
            <div className={s.item}>
              <p>Contato</p>
              <a href={`tel:${PHONE}`} target='_blank' rel='noreferrer'>
                (11) 99163 2603
              </a>
              <a href={`mailto:${EMAIL}`} target='_blank' rel='noreferrer'>
                contato@dafneoliveira.com.br
              </a>
            </div>
          </div>
          <div className={s.right}>
            <div className={s.socials}>
              <a
                className={s.link}
                href={INSTA_LINK}
                target='_blank'
                rel='noopener noreferrer'
              >
                <Image src={insta} alt='Instagram' width={34} height={34} />
              </a>
              <a
                className={s.link}
                href={WHATS_LINK}
                target='_blank'
                rel='noopener noreferrer'
              >
                <Image src={whats} alt='WhatsApp' width={34} height={34} />
              </a>
            </div>
            <p className={s.copyright}>
              <Link href='/termos-de-uso' className={s.copyright__link}>
                Termos de uso
              </Link>{" "}
              | Todos direitos reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
