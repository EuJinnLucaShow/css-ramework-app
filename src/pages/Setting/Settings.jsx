import { useState } from "react";
import styles from "./Settings.module.css";
import PopUp from "../../components/PopUp/PopUp";

export default function Settings() {
  const [ModalOpen, setModalOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      <h2>Setting Page</h2>
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
