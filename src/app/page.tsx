import Link from 'next/link';
import { ASSOCIATION, EVENTS, VALUES } from '@/lib/content';
import EventCard from '@/components/EventCard/EventCard';
import ValueRow from '@/components/ValueRow/ValueRow';
import StatBlock from '@/components/StatBlock/StatBlock';
import SectionHeader from '@/components/SectionHeader/SectionHeader';
import styles from './page.module.css';

export default function HomePage() {
  const nextEvent = EVENTS[0];

  return (
    <main>
      {/* Hero */}
      <section className={styles.heroSection}>
        <div className={styles.heroInner}>
          <div className={styles.heroLeft}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} aria-hidden="true" />
              <span className={styles.eyebrowText}>
                {ASSOCIATION.fullName} · Est. {ASSOCIATION.founded}
              </span>
            </div>
            <h1 className={styles.heroHeading}>
              Connecting Cambodian students across <em className={styles.heroEm}>Britain.</em>
            </h1>
            <p className={styles.heroBody}>
              {ASSOCIATION.tagline} A welcoming space for Cambodian students across British universities — built on culture, community, and mutual support.
            </p>
            <div className={styles.heroActions}>
              <Link href="/events" className={styles.heroCta}>See upcoming events</Link>
              <Link href="/about" className={styles.heroGhost}>Learn about us →</Link>
            </div>
          </div>
          <aside className={styles.heroSide} aria-label="Association at a glance">
            <p className={styles.sideLabel}>Association at a glance</p>
            <StatBlock number={ASSOCIATION.memberCount} label="Members" sidebar />
            <StatBlock number={ASSOCIATION.eventCount} label="Events this year" sidebar />
            <StatBlock number={ASSOCIATION.universityCount} label="Universities" sidebar />
          </aside>
        </div>
        {/* Mobile stats row */}
        <div className={styles.mobileStats}>
          <StatBlock number={ASSOCIATION.memberCount} label="Members" />
          <StatBlock number={ASSOCIATION.eventCount} label="Events this year" />
          <StatBlock number={ASSOCIATION.universityCount} label="Universities" />
        </div>
      </section>

      {/* Event banner */}
      <div className={styles.eventBanner}>
        <div className={styles.bannerInner}>
          <span className={styles.bannerLabel}>Next event</span>
          <span className={styles.bannerRule} aria-hidden="true" />
          <span className={styles.bannerName}>{nextEvent.name}</span>
          <span className={styles.bannerDot} aria-hidden="true">·</span>
          <span className={styles.bannerMeta}>{nextEvent.month} {nextEvent.day}</span>
          <span className={styles.bannerDot} aria-hidden="true">·</span>
          <span className={styles.bannerMeta}>{nextEvent.venue}</span>
          <Link href="/events" className={styles.bannerRegister}>Register now →</Link>
        </div>
      </div>

      {/* Events preview */}
      <section className={styles.eventsSection}>
        <div className={styles.sectionInner}>
          <SectionHeader title="Upcoming events" linkLabel="See all →" href="/events" />
          {EVENTS.slice(0, 2).map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>

      {/* Values preview */}
      <section className={styles.valuesSection}>
        <div className={styles.sectionInner}>
          <SectionHeader title="Our values" linkLabel="Learn more →" href="/about" />
          {VALUES.slice(0, 2).map(v => (
            <ValueRow key={v.num} num={v.num} title={v.title} desc={v.desc} />
          ))}
        </div>
      </section>

      {/* Join CTA */}
      <section className={styles.joinSection}>
        <div className={styles.joinInner}>
          <div className={styles.joinLeft}>
            <p className={styles.joinEyebrow}>Membership · {ASSOCIATION.membershipPrice} per person</p>
            <h2 className={styles.joinHeading}>
              Be part of something <em className={styles.joinEm}>real.</em>
            </h2>
            <p className={styles.joinBody}>
              Membership is just {ASSOCIATION.membershipPrice} and open to all Cambodian students at any UK university. Join our community, come to events, and stay connected to your culture.
            </p>
          </div>
          <div className={styles.joinRight}>
            <Link href="/join" className={styles.joinBtn}>Become a member</Link>
            <a href={`mailto:${ASSOCIATION.email}`} className={styles.joinSecondary}>
              {ASSOCIATION.email}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
