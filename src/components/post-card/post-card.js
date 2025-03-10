import Image from "next/image";
import styles from "./post-card.module.css";
import Link from "next/link";

export default function PostCard({ post }) {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        {post.img && (
          <div className={styles.imgContainer}>
            <Image src={post.img} className={styles.img} fill />
          </div>
        )}
        <span className={styles.date}>01.01.2025</span>
      </div>
      <div className={styles.buttom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.body}</p>
        <Link className={styles.link} href={`/blog/${post.slug}`}>
          Read more
        </Link>
      </div>
    </div>
  );
}
