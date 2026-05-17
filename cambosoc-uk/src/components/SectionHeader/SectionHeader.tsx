import Link from 'next/link';
import styles from './SectionHeader.module.css';

type Props = {
  title: string;
  linkLabel?: string;
  href?: string;
};

export default function SectionHeader({ title, linkLabel, href }: Props) {
  return (
    <div className={styles.header}>
      <h2 className={styles.title}>{title}</h2>
      {linkLabel && href && (
        <Link href={href} className={styles.link}>{linkLabel}</Link>
      )}
    </div>
  );
}
