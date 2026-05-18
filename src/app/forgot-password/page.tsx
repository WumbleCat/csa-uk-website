import ForgotPasswordForm from './ForgotPasswordForm';
import styles from './forgot-password.module.css';

export const metadata = {
  title: 'Reset password — CSA UK',
};

export default function ForgotPasswordPage() {
  return (
    <main className={styles.page}>
      <div className={styles.card}>
        <h1 className={styles.heading}>Reset password</h1>
        <p className={styles.sub}>Enter your email and we&apos;ll send you a reset link</p>
        <ForgotPasswordForm />
      </div>
    </main>
  );
}
