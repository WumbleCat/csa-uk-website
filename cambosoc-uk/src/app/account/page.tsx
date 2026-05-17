import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import AccountClient from './AccountClient';
import styles from './account.module.css';

export const metadata = {
  title: 'My Account — CamboSoc UK',
};

export default async function AccountPage() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect('/login');

  const { data: profile } = await supabase
    .from('profiles')
    .select('first_name, last_name, university, grad_year')
    .eq('id', user.id)
    .single();

  return (
    <main className={styles.page}>
      <div className={styles.card}>
        <h1 className={styles.heading}>My account</h1>
        <p className={styles.sub}>Signed in as <strong>{user.email}</strong></p>
        {profile?.university && (
          <p className={styles.university}>{profile.university}</p>
        )}
        <AccountClient
          firstName={profile?.first_name ?? ''}
          lastName={profile?.last_name ?? ''}
          gradYear={profile?.grad_year ?? null}
        />
      </div>
    </main>
  );
}
