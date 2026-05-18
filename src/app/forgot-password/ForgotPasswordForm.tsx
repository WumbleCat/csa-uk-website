'use client';

import { useState } from 'react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';
import { checkRateLimit, markRateLimit } from '@/lib/rateLimit';
import styles from './forgot-password.module.css';

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    const { allowed, secondsLeft } = checkRateLimit('rl_password_reset');
    if (!allowed) {
      setError(`Please wait ${secondsLeft}s before trying again.`);
      return;
    }

    setLoading(true);

    const supabase = createClient();
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `https://csa-uk-website-iota.vercel.app/auth/callback?next=/auth/reset-password`,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    markRateLimit('rl_password_reset');
    setSuccess(true);
    setLoading(false);
  }

  if (success) {
    return (
      <div className={styles.successBox}>
        <p className={styles.successTitle}>Check your email</p>
        <p className={styles.successBody}>
          We&apos;ve sent a password reset link to <strong>{email}</strong>. Click it to choose a new password.
        </p>
        <Link href="/login" className={styles.backLink}>Back to sign in →</Link>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.field}>
        <label htmlFor="email" className={styles.label}>Email address</label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          className={styles.input}
          placeholder="you@university.ac.uk"
        />
      </div>

      {error && <p className={styles.error} role="alert">{error}</p>}

      <button type="submit" className={styles.submitBtn} disabled={loading}>
        {loading ? 'Sending…' : 'Send reset link'}
      </button>

      <p className={styles.switchLink}>
        <Link href="/login" className={styles.switchAnchor}>Back to sign in</Link>
      </p>
    </form>
  );
}
