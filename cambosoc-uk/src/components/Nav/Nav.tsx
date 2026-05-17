'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import type { User } from '@supabase/supabase-js';
import { createClient } from '@/lib/supabase/client';
import styles from './Nav.module.css';

const links = [
  { label: 'Events', href: '/events' },
  { label: 'About', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data }) => setUser(data.user));
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_, session) => {
      setUser(session?.user ?? null);
    });
    return () => subscription.unsubscribe();
  }, []);

  return (
    <header className={styles.nav}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} onClick={() => setOpen(false)}>
          <Image
            src="/images/csa_uk.jpg"
            alt="CSA UK logo"
            width={36}
            height={36}
            className={styles.logoImg}
            priority
          />
          <span className={styles.logoMain}>CSA</span>
          <span className={styles.logoSub}>UK</span>
        </Link>
        <nav className={styles.desktopLinks} aria-label="Main navigation">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={`${styles.link} ${pathname === l.href ? styles.active : ''}`}
            >
              {l.label}
            </Link>
          ))}
          {user ? (
            <Link
              href="/account"
              className={`${styles.link} ${pathname === '/account' ? styles.active : ''}`}
            >
              Account
            </Link>
          ) : (
            <Link
              href="/login"
              className={`${styles.link} ${pathname === '/login' ? styles.active : ''}`}
            >
              Login
            </Link>
          )}
          <Link
            href="/join"
            className={`${styles.joinBtn} ${pathname === '/join' ? styles.joinActive : ''}`}
          >
            Join us
          </Link>
        </nav>
        <button
          className={styles.hamburger}
          onClick={() => setOpen(v => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={20} color="var(--ink)" /> : <Menu size={20} color="var(--ink)" />}
        </button>
      </div>
      {open && (
        <nav className={styles.mobileMenu} aria-label="Mobile navigation">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={`${styles.mobileLink} ${pathname === l.href ? styles.mobileLinkActive : ''}`}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          {user ? (
            <Link
              href="/account"
              className={`${styles.mobileLink} ${pathname === '/account' ? styles.mobileLinkActive : ''}`}
              onClick={() => setOpen(false)}
            >
              Account
            </Link>
          ) : (
            <Link
              href="/login"
              className={`${styles.mobileLink} ${pathname === '/login' ? styles.mobileLinkActive : ''}`}
              onClick={() => setOpen(false)}
            >
              Login
            </Link>
          )}
          <Link
            href="/join"
            className={`${styles.mobileLink} ${styles.mobileJoin}`}
            onClick={() => setOpen(false)}
          >
            Join us
          </Link>
        </nav>
      )}
    </header>
  );
}
