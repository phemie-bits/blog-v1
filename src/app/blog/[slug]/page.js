import Image from "next/image";
import styles from "./post-details.module.css";
import PostUser from "@/components/post-card/post-user/post-user";
import { Suspense } from "react";
import { getPost } from "@/lib/data";

//FETCH DATA WITH AN API
const getData = async function (slug) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const res = await fetch(`${baseUrl}/api/blog/${slug}`);

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);
  return {
    title: post.title,
    description: post.desc,
  };
}

export default async function PostDetails({ params }) {
  const { slug } = await params;
  //FETCH DATA WITH AN API
  const post = await getData(slug);

  //FETCH DATA WITHOUT AN API
  //const post = await getPost(slug);
  return (
    <div className={styles.container}>
      {post.img && (
        <div className={styles.imgContainer}>
          <Image fill src={post.img} className={styles.img} />
        </div>
      )}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.details}>
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}

          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {post.createdAt.toString().slice(0, 16)}
            </span>
          </div>
        </div>
        <div className={styles.content}>{post.desc}</div>
      </div>
    </div>
  );
}
