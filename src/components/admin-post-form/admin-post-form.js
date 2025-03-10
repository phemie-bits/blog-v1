'use client'

import { useActionState } from "react";
import styles from "./admin-post-form.module.css";
import { addPost } from "@/lib/actions";

export default function AdminPostForm({userId}) {
  const [state, formAction] = useActionState(addPost, { message: null });
  return (
    <form action={formAction} className={styles.container}>
      <h1>Add New Post</h1>
      <input type="hidden" name="userId" value={userId} />
      <input type="text" name="title" placeholder="Title" />
      <input type="text" name="slug" placeholder="slug" />
      <input type="text" name="img" placeholder="img" />
      <textarea type="text" name="desc" placeholder="desc" rows={10} />
      <button>Add</button>
      <p style={{color : "red"}}>{state && state.error}</p>
    </form>
  );
}
