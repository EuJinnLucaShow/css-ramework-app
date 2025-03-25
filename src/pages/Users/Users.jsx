import { useState } from "react";
import PopUp from "../../components/PopUp/PopUp";
import styles from "./Users.module.css";

export default function Users() {
  const [ModalOpen, setModalOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      <h2>User Page</h2>
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
