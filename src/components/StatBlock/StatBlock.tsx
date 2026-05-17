import styles from './StatBlock.module.css';

type Props = {
  number: string;
  label: string;
  sidebar?: boolean;
};

export default function StatBlock({ number, label, sidebar }: Props) {
  return (
    <div className={`${styles.block} ${sidebar ? styles.sidebar : ''}`}>
      <span className={styles.number}>{number}</span>
      <span className={styles.label}>{label}</span>
    </div>
  );
}
