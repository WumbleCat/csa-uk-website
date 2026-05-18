'use client';

import { useState } from 'react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';
import { checkRateLimit, markRateLimit } from '@/lib/rateLimit';
import styles from './signup.module.css';

const CURRENT_YEAR = new Date().getFullYear();
const GRAD_YEARS = Array.from({ length: 8 }, (_, i) => CURRENT_YEAR + i);

export default function SignupForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [university, setUniversity] = useState('');
  const [gradYear, setGradYear] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');

    if (password !== confirm) {
      setError('Passwords do not match.');
      return;
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters.');
      return;
    }

    const { allowed, secondsLeft } = checkRateLimit('rl_signup');
    if (!allowed) {
      setError(`Please wait ${secondsLeft}s before trying again.`);
      return;
    }

    setLoading(true);
    const supabase = createClient();
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          first_name: firstName,
          last_name: lastName,
          university,
          grad_year: gradYear,
        },
        emailRedirectTo: `https://csa-uk-website-iota.vercel.app/auth/callback`,
      },
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    if (data.user && data.user.identities?.length === 0) {
      setError('An account with this email already exists. Please sign in instead.');
      setLoading(false);
      return;
    }

    markRateLimit('rl_signup');
    setSuccess(true);
    setLoading(false);
  }

  async function handleOAuth() {
    const supabase = createClient();
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: `https://csa-uk-website-iota.vercel.app/auth/callback` },
    });
  }

  if (success) {
    return (
      <div className={styles.successBox}>
        <p className={styles.successTitle}>Check your email</p>
        <p className={styles.successBody}>
          We&apos;ve sent a confirmation link to <strong>{email}</strong>. Click it to activate your account.
        </p>
        <Link href="/login" className={styles.backLink}>Back to sign in →</Link>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="firstName" className={styles.label}>First name</label>
          <input
            id="firstName"
            type="text"
            autoComplete="given-name"
            required
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
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
            required
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            className={styles.input}
            placeholder="Prak"
          />
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="university" className={styles.label}>University</label>
        <input
          id="university"
          type="text"
          autoComplete="organization"
          required
          value={university}
          onChange={e => setUniversity(e.target.value)}
          className={styles.input}
          placeholder="University of Bristol"
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="gradYear" className={styles.label}>Year of graduation</label>
        <select
          id="gradYear"
          required
          value={gradYear}
          onChange={e => setGradYear(e.target.value)}
          className={styles.input}
        >
          <option value="" disabled>Select year</option>
          {GRAD_YEARS.map(y => (
            <option key={y} value={y}>{y}</option>
          ))}
        </select>
      </div>

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

      <div className={styles.field}>
        <label htmlFor="password" className={styles.label}>Password</label>
        <input
          id="password"
          type="password"
          autoComplete="new-password"
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
          className={styles.input}
          placeholder="Min. 8 characters"
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="confirm" className={styles.label}>Confirm password</label>
        <input
          id="confirm"
          type="password"
          autoComplete="new-password"
          required
          value={confirm}
          onChange={e => setConfirm(e.target.value)}
          className={styles.input}
          placeholder="••••••••"
        />
      </div>

      {error && <p className={styles.error} role="alert">{error}</p>}

      <button type="submit" className={styles.submitBtn} disabled={loading}>
        {loading ? 'Creating account…' : 'Create account'}
      </button>

      <div className={styles.divider}>
        <span className={styles.dividerLine} />
        <span className={styles.dividerText}>or</span>
        <span className={styles.dividerLine} />
      </div>

      <button type="button" className={styles.oauthBtn} onClick={handleOAuth}>
        <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
          <path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"/>
          <path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"/>
          <path fill="#FBBC05" d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"/>
          <path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"/>
        </svg>
        Continue with Google
      </button>

      <p className={styles.switchLink}>
        Already have an account?{' '}
        <Link href="/login" className={styles.switchAnchor}>Sign in</Link>
      </p>
    </form>
  );
}
