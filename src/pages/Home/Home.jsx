import { useState } from "react";

import PopUp from "../../components/PopUp/PopUp";
import styles from "./Home.module.css";

export default function Home() {
  const [ModalOpen, setModalOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      <h2>Home Page</h2>
      <button
        className={styles.button}
        onClick={() => setModalOpen(true)}
        disabled={ModalOpen}
      >
        Click me!
      </button>
      <PopUp isOpen={ModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
