'use client';

import { useState } from 'react';
import { MapPin, Clock } from 'lucide-react';
import type { Event } from '@/lib/content';
import styles from './EventCard.module.css';

type Props = {
  event: Event;
  defaultExpanded?: boolean;
};

export default function EventCard({ event, defaultExpanded = false }: Props) {
  const [expanded, setExpanded] = useState(defaultExpanded);

  return (
    <div className={`${styles.card} ${event.featured ? styles.featured : ''}`}>
      {event.featured && (
        <span className={styles.badge}>Featured</span>
      )}
      <div className={styles.dateBlock}>
        <span className={styles.day}>{event.day}</span>
        <span className={styles.month}>{event.month.toUpperCase()}</span>
      </div>
      <p className={styles.name}>{event.name}</p>
      <div className={styles.meta}>
        <span className={styles.metaItem}>
          <MapPin size={14} aria-hidden="true" />
          <span>{event.venue}</span>
        </span>
        <span className={styles.metaItem}>
          <Clock size={14} aria-hidden="true" />
          <span>{event.time}</span>
        </span>
      </div>
      <a href="#" className={styles.rsvp} aria-label={`RSVP for ${event.name}`}>RSVP</a>
      <button
        className={styles.toggle}
        onClick={() => setExpanded(v => !v)}
        aria-expanded={expanded}
        aria-controls={`event-desc-${event.id}`}
      >
        {expanded ? 'Hide details ↑' : 'Show details ↓'}
      </button>
      {expanded && (
        <p id={`event-desc-${event.id}`} className={styles.description}>
          {event.description}
        </p>
      )}
    </div>
  );
}
