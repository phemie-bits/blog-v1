import { loginWithGitHubHandler } from "@/lib/actions";
import styles from "./login.module.css"
import LoginForm from "@/components/login-form/login-form";


export default function Login() {

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <LoginForm />
        <form action={loginWithGitHubHandler}>
            <button className={styles.github}>
                Login with Github
            </button>
        </form>
      </div>
    </div>
  );
}
