import { ABOUT_PARAGRAPHS, VALUES, TEAM } from '@/lib/content';
import ValueRow from '@/components/ValueRow/ValueRow';
import SectionHeader from '@/components/SectionHeader/SectionHeader';
import styles from './about.module.css';

export default function AboutPage() {
  return (
    <main>
      <div className={styles.pageHeader}>
        <h1 className={styles.title}>About us</h1>
      </div>

      <section className={styles.mainSection}>
        <div className={styles.grid}>
          <div className={styles.aboutText}>
            {ABOUT_PARAGRAPHS.map((p, i) => (
              <p key={i} className={styles.paragraph}>{p}</p>
            ))}
            <a href="#" className={styles.ghostLink}>Read our full story →</a>
          </div>
          <div className={styles.valuesCol}>
            <SectionHeader title="Our values" />
            {VALUES.map(v => (
              <ValueRow key={v.num} num={v.num} title={v.title} desc={v.desc} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.committeeSection}>
        <div className={styles.committeeInner}>
          <SectionHeader title="Meet the committee" />
          <div className={styles.teamGrid}>
            {TEAM.map(member => (
              <div key={member.initials} className={styles.teamCard}>
                <div className={styles.avatar} aria-hidden="true">
                  <span className={styles.initials}>{member.initials}</span>
                </div>
                <p className={styles.memberName}>{member.name}</p>
                <p className={styles.memberRole}>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
