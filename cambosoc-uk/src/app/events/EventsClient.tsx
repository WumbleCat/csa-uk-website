'use client';

import { useState } from 'react';
import type { Event } from '@/lib/content';
import EventCard from '@/components/EventCard/EventCard';
import styles from './events.module.css';

const CATEGORIES = ['All', 'Cultural', 'Social', 'Career'] as const;
type Category = typeof CATEGORIES[number];

type Props = {
  events: Event[];
};

export default function EventsClient({ events }: Props) {
  const [active, setActive] = useState<Category>('All');

  const filtered = active === 'All'
    ? events
    : events.filter(e => e.category === active);

  return (
    <div className={styles.clientSection}>
      <div className={styles.pills} role="group" aria-label="Filter events by category">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`${styles.pill} ${active === cat ? styles.pillActive : ''}`}
            aria-pressed={active === cat}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className={styles.list}>
        {filtered.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}
