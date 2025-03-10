import styles from './footer.module.css'

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        Kara
      </div>
      <div className={styles.text}>
        Kara creative blog @ All rights reserved.
      </div>
    </div>
  );
}
