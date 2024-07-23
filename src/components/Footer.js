import { BiLogoGmail as Gmail } from "react-icons/bi";
import { FaDiscord as Discord } from "react-icons/fa6";
import { SlSocialVkontakte as VK } from "react-icons/sl";

import { unbounded } from "@/util/fonts";
import styles from "@/styles/Footer.module.css";

const Footer = () => {
  return (
    <footer
      className={`${unbounded.className} flex flex-col items-center justify-evenly gap-8 bg-[#212529] px-4 py-20 text-white md:flex-row md:items-start md:gap-0`}
    >
      <div className="flex justify-center" style={{ alignItems: "center" }}>
        <h3 className={`${styles.footer_logo} text-6xl`}>VIEW</h3>
      </div>
      <div>
        <h3 className={`${styles.footer_header} text-2xl font-medium`}>
          Contacts
        </h3>
        <div className={`${styles.footer_links} font-light`}>
          <a className={styles.footer_link} href="mailto:wqr1414@gmail.com">
            <Gmail className={styles.footer_link_logo} />
            Gmail
          </a>
          <a className={styles.footer_link} href="">
            <Discord className={styles.footer_link_logo} />
            Discord
          </a>
        </div>
      </div>
      <div>
        <h3 className={`${styles.footer_header} text-2xl font-medium`}>
          Follow me
        </h3>
        <div className={`${styles.footer_links} font-light`}>
          <a
            className={styles.footer_link}
            href="https://vk.com/evxrydayrainagain"
          >
            <VK className={styles.footer_link_logo} />
            VK
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
