import { Mail, AtSign, Calendar } from 'lucide-react';
import { ASSOCIATION } from '@/lib/content';
import SectionHeader from '@/components/SectionHeader/SectionHeader';
import styles from './join.module.css';

const STEPS = [
  { Icon: Mail, text: `Email us at ${ASSOCIATION.email}` },
  { Icon: AtSign, text: `Follow ${ASSOCIATION.instagram} on Instagram` },
  { Icon: Calendar, text: 'Come to your first event — no commitment needed' },
];

export default function JoinPage() {
  return (
    <main>
      {/* Navy hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.heroEyebrow}>{ASSOCIATION.membershipPrice} per person · Open to all</p>
          <h1 className={styles.heroHeading}>Be part of something real.</h1>
          <p className={styles.heroBody}>
            Membership is just {ASSOCIATION.membershipPrice} and open to all Cambodian students at any UK university. Join our mailing list, come to events, and connect with a community that understands where you come from.
          </p>
        </div>
      </section>

      {/* How to join */}
      <section className={styles.stepsSection}>
        <div className={styles.stepsInner}>
          <SectionHeader title="How to join" />
          {STEPS.map(({ Icon, text }, i) => (
            <div key={i} className={styles.step}>
              <Icon size={20} className={styles.stepIcon} aria-hidden="true" />
              <span className={styles.stepText}>{text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Primary CTA */}
      <div className={styles.ctaWrap}>
        <a
          href={`mailto:${ASSOCIATION.email}`}
          className={styles.ctaBtn}
          aria-label={`Send an email to ${ASSOCIATION.email}`}
        >
          Send us an email →
        </a>
      </div>

      {/* Contact block */}
      <div className={styles.contactBlock}>
        <div className={styles.contactInner}>
          <p className={styles.contactLabel}>Get in touch</p>
          <div className={styles.contactRow}>
            <Mail size={16} className={styles.contactIconNavy} aria-hidden="true" />
            <a href={`mailto:${ASSOCIATION.email}`} className={styles.contactLinkNavy}>
              {ASSOCIATION.email}
            </a>
          </div>
          <div className={styles.contactRow}>
            <AtSign size={16} className={styles.contactIconRed} aria-hidden="true" />
            <a href={ASSOCIATION.instagramUrl} className={styles.contactLinkMuted} target="_blank" rel="noopener noreferrer">
              {ASSOCIATION.instagram}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
