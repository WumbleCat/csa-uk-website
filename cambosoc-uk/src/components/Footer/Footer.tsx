import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.brand}>CSA UK</span>
        <nav className={styles.links} aria-label="Footer navigation">
          <Link href="/events" className={styles.link}>Events</Link>
          <Link href="/about" className={styles.link}>About</Link>
          <Link href="/gallery" className={styles.link}>Gallery</Link>
          <Link href="/join" className={styles.link}>Join</Link>
        </nav>
        <span className={styles.copy}>© 2026 Cambodian Students&apos; Association UK</span>
      </div>
    </footer>
  );
}
