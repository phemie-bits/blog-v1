import { Suspense } from "react";
import styles from "./admin.module.css";
import AdminPosts from "@/components/admin-posts/admin-posts";
import AdminPostForm from "@/components/admin-post-form/admin-post-form";
import AdminUsers from "@/components/admin-users/admin-users";
import AdminUserForm from "@/components/admin-user-form/admin-user-form";
import { auth } from "@/lib/auth";

// Reusable fallback loader
const Loader = ({ title }) => (
  <div style={{ textAlign: "center", padding: "2rem", color: "#666" }}>
    <p style={{ marginBottom: "0.5rem" }}>{title}</p>
    <div
      style={{
        width: "32px",
        height: "32px",
        border: "4px solid #ccc",
        borderTop: "4px solid #333",
        borderRadius: "50%",
        animation: "spin 1s linear infinite",
        margin: "0 auto",
      }}
    />
    <style>
      {`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}
    </style>
  </div>
);

const AdminPage = async () => {
  const session = await auth();

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<Loader title="Loading Posts..." />}>
            <AdminPosts />
          </Suspense>
        </div>
        <div className={styles.col}>
          <AdminPostForm userId={session.user.id} />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<Loader title="Loading Users..." />}>
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
