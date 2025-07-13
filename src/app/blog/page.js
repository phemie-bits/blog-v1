import PostCard from "@/components/post-card/post-card";
import styles from "./blog.module.css";
import { getPosts } from "@/lib/data";

//FETCH DATA WITH AN API
const getData = async function () {
  const res = await fetch("http://localhost:3000/api/blog");

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

export default async function Blog() {
  //FETCH DATA WITH AN API
  const posts = await getData();

  //FETCH DATA WITHOUT AN API
  //const posts = await getPosts();
  return (
    <div className={styles.container} style={{
            justifyContent: "center",
          }}>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div className={styles.post} key={post._id}>
            <PostCard post={post} />
          </div>
        ))
      ) : (
        <div
          style={{
            textAlign: "center",
            padding: "4rem 1rem",
            color: "#6b7280",
          }}
        >
          <div
            style={{
              fontSize: "48px",
              marginBottom: "1rem",
            }}
          >
            📨
          </div>
          <p
            style={{
              fontSize: "18px",
              marginBottom: "0.5rem",
            }}
          >
            No posts yet.
          </p>
          <p
            style={{
              fontSize: "14px",
              color: "#9ca3af",
            }}
          >
            Posts created will show up here.
          </p>
        </div>
      )}
    </div>
  );
}
