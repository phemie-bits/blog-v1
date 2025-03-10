import styles from "./about.module.css";
import Image from "next/image";

export default function About() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>About Kara</h2>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
            blanditils adipisci minima reiciendis a autem assumenda dolore.
          </p>
        </div>
        <div className={styles.imgContainer}>
          <Image src="/about.png" fill className={styles.img} />
        </div>
      </div>
    </div>
  );
}
