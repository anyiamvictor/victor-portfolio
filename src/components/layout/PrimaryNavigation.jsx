import { NavLink } from "react-router";
import { createPortal } from "react-dom";
import {
  Home,
  User,
  Folder,
  Lightbulb,
  Mail,
} from "lucide-react";

import { primaryRoutes } from "../../app/routeConfig";
import styles from "./PrimaryNavigation.module.scss";

const iconMap = {
  "/": Home,
  "/about": User,
  "/work": Folder,
  "/expertise": Lightbulb,
  "/contact": Mail,
};

const shortLabels = {
  "/": "Home",
  "/about": "About",
  "/work": "Work",
  "/expertise": "Expertise",
  "/contact": "Contact",
};

function NavigationLinks({ mobile = false }) {
  return (
    <nav
      className={mobile ? styles.mobileNav : styles.desktopNav}
      aria-label="Primary navigation"
    >
      {primaryRoutes.map((item) => {
        const Icon = iconMap[item.path];
        const label = mobile ? shortLabels[item.path] : item.label;
        const iconName = item.path === "/" ? "home" : item.path.slice(1);

        return (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/"}
            data-icon={iconName}
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.active : ""}`
            }
            aria-label={item.label}
          >
            <>
              <Icon
                className={styles.navIcon}
                size={20}
                strokeWidth={1.8}
                aria-hidden="true"
              />

              <span className={styles.navLabel} data-label={label}>
                {label}
              </span>
            </>
          </NavLink>
        );
      })}
    </nav>
  );
}

function PrimaryNavigation() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <NavLink to="/" className={styles.brand} aria-label="OVUA home">
            <span>O</span>VUA
          </NavLink>

          <NavigationLinks />
        </div>
      </header>

      {createPortal(<NavigationLinks mobile />, document.body)}
    </>
  );
}

export default PrimaryNavigation;

