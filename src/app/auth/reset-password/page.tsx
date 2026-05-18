import ResetPasswordForm from './ResetPasswordForm';
import styles from './reset-password.module.css';

export const metadata = {
  title: 'Set new password — CSA UK',
};

export default function ResetPasswordPage() {
  return (
    <main className={styles.page}>
      <div className={styles.card}>
        <h1 className={styles.heading}>Set new password</h1>
        <p className={styles.sub}>Choose a new password for your account</p>
        <ResetPasswordForm />
      </div>
    </main>
  );
}
