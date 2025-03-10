import { getUsers } from "@/lib/data";
import styles from "./admin-users.module.css";
import { deleteUser } from "@/lib/actions";
import Image from "next/image";

export default async function AdminUsers() {
  const users = await getUsers();
  return (
    <div>
      <h1>Users</h1>
      {users.map((user) => (
        <div className={styles.post} key={user.id}>
          <div className={styles.detail}>
            <Image src={user.img || "/noAvatar.png"} width={50} height={50} />
            <span>{user.username}</span>
          </div>

          <form action={deleteUser}>
            <input type="hidden" name="id" value={user.id} />
            <button className={styles.userButton}>Delete</button>
          </form>
        </div>
      ))}
    </div>
  );
}
