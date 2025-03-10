import RegisterForm from "@/components/register-form/register-form";
import styles from "./register.module.css";

export default function Register() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <RegisterForm />
      </div>
    </div>
  );
}
