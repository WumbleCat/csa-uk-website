import SignupForm from './SignupForm';
import styles from './signup.module.css';

export const metadata = {
  title: "Create account — CSA UK",
};

export default function SignupPage() {
  return (
    <main className={styles.page}>
      <div className={styles.card}>
        <h1 className={styles.heading}>Join CSA UK</h1>
        <p className={styles.sub}>Create your account to get started</p>
        <SignupForm />
      </div>
    </main>
  );
}
