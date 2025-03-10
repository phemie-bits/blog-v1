"use client";

import styles from "./register-form.module.css";
import { registerHandler } from "@/lib/actions";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";
import Link from "next/link";

export default function RegisterForm() {
  const [state, formAction] = useActionState(registerHandler, {message: null});
  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/login");
  }, [state.success, router]);

  return (
    <form className={styles.form} action={formAction}>
      <input type="text" placeholder="Username" name="username" />
      <input type="email" placeholder="E-mail" name="email" />
      <input type="password" placeholder="Password" name="password" />
      <input
        type="password"
        placeholder="Password again"
        name="password_repeat"
      />
      <button>Register</button>
      {state?.error && <p>{state.error}</p>}
      <Link href="/login">
        Have an account? <b>Login</b>
      </Link>
    </form>
  );
}
