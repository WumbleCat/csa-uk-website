import LoginForm from './LoginForm';
import styles from './login.module.css';

export const metadata = {
  title: "Sign in — CSA UK",
};

export default function LoginPage() {
  return (
    <main className={styles.page}>
      <div className={styles.card}>
        <h1 className={styles.heading}>Welcome back</h1>
        <p className={styles.sub}>Sign in to your CSA UK account</p>
        <LoginForm />
      </div>
    </main>
  );
}
