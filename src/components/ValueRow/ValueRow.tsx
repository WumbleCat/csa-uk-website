import styles from './ValueRow.module.css';

type Props = {
  num: string;
  title: string;
  desc: string;
};

export default function ValueRow({ num, title, desc }: Props) {
  return (
    <div className={styles.row}>
      <span className={styles.num}>{num}</span>
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        <p className={styles.desc}>{desc}</p>
      </div>
    </div>
  );
}
