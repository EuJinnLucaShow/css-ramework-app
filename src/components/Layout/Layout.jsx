import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";

import styles from "./Layout.module.css";
import Loader from "../Loader/Loader";

export default function Layout() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.sideBarWrapper}>
        <nav className={styles.wrapperLink}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.active : ""}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.active : ""}`
            }
          >
            Settings
          </NavLink>
          <NavLink
            to="/users"
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.active : ""}`
            }
          >
            Users
          </NavLink>
        </nav>
      </div>
      <div className={styles.contentWrapper}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}
