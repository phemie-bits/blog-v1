"use client";

import styles from "./login-form.module.css";
import { loginHandler } from "@/lib/actions";
import { useActionState } from "react";
import Link from "next/link";

export default function LoginForm() {
  const [state, formAction] = useActionState(loginHandler, { message: null });

  return (
    <form className={styles.form} action={formAction}>
      <input type="text" placeholder="Username" name="username" />
      <input type="password" placeholder="Password" name="password" />

      <button>Login</button>
      {state?.error && <p style={{ color: "red" }}>{state.error}</p>}
      <Link href="/register">
        Don't have an account? <b>Register</b>
      </Link>
    </form>
  );
}

// "use client";

// import styles from "./login-form.module.css";
// import { loginHandler } from "@/lib/actions";
// import { useActionState, useEffect } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";

// export default function LoginForm() {
//   const [state, formAction] = useActionState(loginHandler, { message: null });
//   const router = useRouter();

//TO USE ANY OF THE BELOW (A manual way of handling redirect after login form authentication) first uncomment the "Manual redirection" chunk in actions.js and uncomment its counterpart
// TO USE THIS GO TO actions.js and uncomment "##"
// THEN CHANGE "await signIn("credentials", { username, password });" to "await signIn("credentials", { username, password, redirect: false });"
// useEffect(() => {
//     state?.message=="success" && router.refresh();
//  }, [state.message, router]);

// TO USE THIS GO TO actions.js and comment "##"
// useEffect(() => {
//   state?.error=="Redirect Error" && router.refresh();
//  }, [state.error, router]);

// TO USE THIS GO TO actions.js and comment "##"
// useEffect(() => {
//   const handleUpdate = async () => {
//     if (state?.error == "Redirect Error") {
//       //await update();//removing this causes the handleUpdate function to work as intended as the above
//       router.refresh();
//     }
//   };

//   handleUpdate(); // Call the async function
// }, [state.error, router]);

//   return (
//     <form className={styles.form} action={formAction}>
//       <input type="text" placeholder="Username" name="username" />
//       <input type="password" placeholder="Password" name="password" />

//       <button>Login</button>
//       {state?.error && <p style={{ color: "red" }}>{state.error}</p>}
//       <Link href="/register">
//         Don't have an account? <b>Register</b>
//       </Link>
//     </form>
//   );
// }
