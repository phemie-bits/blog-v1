import { getPosts } from "@/lib/data";
import styles from "./admin-posts.module.css";
import Image from "next/image";
import { deletePost } from "@/lib/actions";

export default async function AdminPosts() {
  const posts = await getPosts();
  return (
    <div className={styles.container}>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <div className={styles.detail}>
            <Image src={post.img || "/noAvatar.png"} width={50} height={50} />
            <span className={styles.postTitle}>{post.title}</span>
          </div>

          <form action={deletePost}>
            <input type="hidden" name="id" value={post.id} />
            <button className={styles.postButton}>Delete</button>
          </form>
        </div>
      ))}
    </div>
  );
}
