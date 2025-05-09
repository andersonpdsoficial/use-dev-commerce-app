import { ReactNode } from "react";
import styles from "./Footer.module.css";
import FooterSection from "./FooterSection";
import Divider from "../Divider";
import { LogoVerdeIcon } from "../../common/icons";
import Typography from "../Typography";

type Section = {
  title: string;
  items: string[];
};

type FooterProps = {
  sections: Section[];
  paymentIcons: ReactNode[];
  socialIcons: ReactNode[];
};

export default function Footer({
  sections,
  paymentIcons,
  socialIcons,
}: FooterProps) {
  return (
    <>
      <footer className={styles.footer}>
        <section className="container">
          <div className={styles.sectionsContainer}>
            <div className={styles.logoAndSlogan}>
              <LogoVerdeIcon />
              <Typography className={styles.sloganText}>
                Hora de abraçar seu lado geek!
              </Typography>
            </div>

            {sections.map((section) => (
              <FooterSection
                key={section.title}
                title={section.title}
                items={section.items}
              />
            ))}
          </div>

          <Divider />

          <div className={styles.subFooter}>
            <div className={styles.paymentMethods}>
              <Typography variantStyle="body-large-bold">
                Formas de Pagamento
              </Typography>
              <div className={styles.paymentIcons}>
                {paymentIcons.map((icon) => icon)}
              </div>
            </div>

            <div className={styles.socialMedia}>
              <Typography variantStyle="body-large-bold">
                Siga nossas redes:
              </Typography>
              <div className={styles.socialIcons}>
                {socialIcons.map((icon) => icon)}
              </div>
            </div>
          </div>
        </section>
      </footer>
      <div className={styles.copryright}>
        <Typography variantStyle="body">
          Projeto fictício para fins de estudo e prática de desenvolvimento web implementando SOLID.
        </Typography>
      </div>
    </>
  );
}
