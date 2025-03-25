import iconVite from "../../assets/vite.svg";
import iconReact from "../../assets/react.svg";
import iconRouter from "../../assets/react-router.svg";
import iconVercel from "../../assets/vercel.svg";

import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.wrapper}>
      <a
        href="https://vitejs.dev/"
        className={styles.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={iconVite} className={styles.icons} alt="icons" />
      </a>
      <a
        href="https://react.dev/"
        className={styles.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={iconReact} className={styles.icons} alt="icons" />
      </a>
      <a
        href="https://reactrouter.com/en/main"
        className={styles.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={iconRouter} className={styles.icons} alt="icons" />
      </a>
      <a
        href="https://vercel.com/"
        className={styles.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={iconVercel} className={styles.icons} alt="icons" />
      </a>
    </header>
  );
}
