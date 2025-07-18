import { getUser } from "@/lib/data";
import styles from "./post-user.module.css";
import Image from "next/image";
//FETCH DATA WITH AN API
// const getData = async function (userId) {
//     const res = await fetch(
//       `https://jsonplaceholder.typicode.com/users/${userId}`,
//       { cache: "force-cache" }
//     );

//     if (!res.ok) {
//       throw new Error("Something went wrong");
//     }

//     return res.json();
//   };

export default async function PostUser({ userId }) {
  //FETCH DATA WITH AN API
  //const user = await getData(userId);

  //FETCH DATA WITHOUT AN API
  const user = await getUser(userId);

  return (
    <div className={styles.container}>
      <Image
        width={50}
        height={50}
        className={styles.avatar}
        src={user.img ? user.img : "/noavatar.png"}
      />
      <div className={styles.texts}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user.username}</span>
      </div>
    </div>
  );
}
