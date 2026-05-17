import { Sparkles, UtensilsCrossed, Music, Users } from 'lucide-react';
import styles from './gallery.module.css';

const GALLERY_ITEMS = [
  { bgClass: 'bg0', Icon: Sparkles, line1: 'Khmer New Year 2025', line2: 'London' },
  { bgClass: 'bg1', Icon: UtensilsCrossed, line1: 'Culture & Food Night', line2: 'Bristol' },
  { bgClass: 'bg2', Icon: Music, line1: 'Annual Gala Dinner', line2: 'Manchester' },
  { bgClass: 'bg3', Icon: Users, line1: 'Freshers Welcome', line2: 'Bristol 2024' },
];

export default function GalleryPage() {
  return (
    <main>
      <div className={styles.pageHeader}>
        <h1 className={styles.title}>Gallery</h1>
        <p className={styles.subtitle}>Photos from our past events</p>
      </div>
      <div className={styles.gridWrap}>
        <div className={styles.grid}>
          {GALLERY_ITEMS.map((item, i) => {
            const { Icon } = item;
            return (
              <div key={i} className={`${styles.item} ${styles[item.bgClass]}`}>
                <Icon size={48} className={styles.icon} aria-hidden="true" />
                <p className={styles.caption}>
                  {item.line1}<br />{item.line2}
                </p>
              </div>
            );
          })}
        </div>
        <p className={styles.note}>Tag @cambosocuk on Instagram to be featured here</p>
      </div>
    </main>
  );
}
