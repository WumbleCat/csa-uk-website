import { EVENTS } from '@/lib/content';
import EventsClient from './EventsClient';
import styles from './events.module.css';

export default function EventsPage() {
  return (
    <main>
      <div className={styles.header}>
        <h1 className={styles.title}>Events</h1>
        <p className={styles.subtitle}>What&apos;s coming up</p>
      </div>
      <EventsClient events={EVENTS} />
    </main>
  );
}
