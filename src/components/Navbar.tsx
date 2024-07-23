import Link from "next/link";

import SearchBar from "./SearchBar";

import styles from "@/styles/Navbar.module.css";

import { unbounded } from "@/util/fonts";

const Navbar = () => {
  return (
    <nav className={`${styles.nav} bg-[#212529] py-2 text-white`}>
      <Link
        className={`${styles.logo_text} ${unbounded.className} font-bold`}
        href="/"
      >
        VIEW
      </Link>
      <SearchBar />
      <div className={`${styles.navlinks} font-medium`}>
        <Link className={styles.navlink} href="/">
          Главная
        </Link>
        <Link className={styles.navlink} href="/search">
          Поиск
        </Link>
        <Link className={styles.navlink} href="/schedule">
          Расписание
        </Link>
        <Link className={styles.navlink} href="/community">
          Сообщество
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
