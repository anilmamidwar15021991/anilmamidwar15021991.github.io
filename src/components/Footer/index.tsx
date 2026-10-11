import styles from "./Footer.module.css";
import { socials } from "../../data";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.left}>
        designed with intent. built with craft.
      </span>

      <div className={styles.socials}>
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            className={styles.socialLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
          >
            <i className={s.icon} />
          </a>
        ))}
      </div>

      <span className={styles.right}>
        Anil Mamidwar © {new Date().getFullYear()}
      </span>
    </footer>
  );
}
