import { Suspense } from "react";
import styles from "./admin.module.css";
import AdminPosts from "@/components/admin-posts/admin-posts";
import AdminPostForm from "@/components/admin-post-form/admin-post-form";
import AdminUsers from "@/components/admin-users/admin-users";
import AdminUserForm from "@/components/admin-user-form/admin-user-form";
import { auth } from "@/lib/auth";

const AdminPage = async () => {

  const session = await auth();

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminPosts />
          </Suspense>
        </div>
        <div className={styles.col}>
          <AdminPostForm userId = {session.user.id} />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminUsers />
          </Suspense>
        </div>
        <div className={styles.col}>
          <AdminUserForm />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;