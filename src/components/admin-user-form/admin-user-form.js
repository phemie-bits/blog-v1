'use client'

import styles from "./admin-user-form.module.css";
import { useActionState } from "react";
import { addUser } from "@/lib/actions";


export default function AdminUserForm() {
  const [state, formAction] = useActionState(addUser, { message: null });
  return (
    <form action={formAction} className={styles.container}>
      <h1>Add New User</h1>
      <input type="text" name="username" placeholder="Username" />
      <input type="text" name="email" placeholder="E-mail" />
      <input type="password" name="password" placeholder="Password" />
      <input type="text" name="img" placeholder="img" />
      <select name="isAdmin">
       <option value="false">Is Admin?</option>
        <option value="false">No</option>
        <option value="true">Yes</option>
      </select>
      <button>Add</button>
      <p style={{ color: "red" }}>{state && state.error}</p>
    </form>
  );
}
