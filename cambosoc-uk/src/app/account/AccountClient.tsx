'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import styles from './account.module.css';

const CURRENT_YEAR = new Date().getFullYear();
const GRAD_YEARS = Array.from({ length: 8 }, (_, i) => CURRENT_YEAR + i);

interface Props {
  firstName: string;
  lastName: string;
  gradYear: number | null;
}

export default function AccountClient({ firstName, lastName, gradYear }: Props) {
  const router = useRouter();
  const [first, setFirst] = useState(firstName);
  const [last, setLast] = useState(lastName);
  const [year, setYear] = useState(gradYear ? String(gradYear) : '');
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState('');

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setSaved(false);
    setError('');

    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) { setError('Not signed in.'); setSaving(false); return; }

    const { error: upsertError } = await supabase
      .from('profiles')
      .upsert({
        id: user.id,
        first_name: first.trim(),
        last_name: last.trim(),
        grad_year: year ? parseInt(year, 10) : null,
        updated_at: new Date().toISOString(),
      });

    if (upsertError) {
      setError(upsertError.message);
    } else {
      setSaved(true);
      router.refresh();
    }
    setSaving(false);
  }

  async function handleSignOut() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push('/');
    router.refresh();
  }

  return (
    <div className={styles.clientSection}>
      <form className={styles.form} onSubmit={handleSave} noValidate>
        <p className={styles.sectionLabel}>Edit profile</p>

        <div className={styles.row}>
          <div className={styles.field}>
            <label htmlFor="firstName" className={styles.label}>First name</label>
            <input
              id="firstName"
              type="text"
              autoComplete="given-name"
              value={first}
              onChange={e => setFirst(e.target.value)}
              className={styles.input}
              placeholder="Sophea"
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="lastName" className={styles.label}>Last name</label>
            <input
              id="lastName"
              type="text"
              autoComplete="family-name"
              value={last}
              onChange={e => setLast(e.target.value)}
              className={styles.input}
              placeholder="Prak"
            />
          </div>
        </div>

        <div className={styles.field}>
          <label htmlFor="gradYear" className={styles.label}>Year of graduation</label>
          <select
            id="gradYear"
            value={year}
            onChange={e => setYear(e.target.value)}
            className={styles.input}
          >
            <option value="">— not set —</option>
            {GRAD_YEARS.map(y => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
        </div>

        {error && <p className={styles.error} role="alert">{error}</p>}
        {saved && <p className={styles.success} role="status">Changes saved.</p>}

        <button type="submit" className={styles.saveBtn} disabled={saving}>
          {saving ? 'Saving…' : 'Save changes'}
        </button>
      </form>

      <div className={styles.divider} />

      <button className={styles.signOutBtn} onClick={handleSignOut}>
        Sign out
      </button>
    </div>
  );
}
