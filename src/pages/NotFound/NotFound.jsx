import notFound from "../../assets/404.png";
import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <div className={styles.errorPage}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <img src={notFound} className={styles.imgNotFound} alt="not fount" />
    </div>
  );
}
