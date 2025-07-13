import Image from "next/image";
import styles from "./home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Blogging</h1>
        <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          blanditils adipisci minima reiciendis a autem assumenda dolore.
        </p>
        <div className={styles.buttons}>
          <Link href="/about" className={styles.button}>Learn more</Link>
          <Link href="/contact" className={styles.button}>Contact</Link>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" fill className={styles.brandImg} />
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src="/hero.gif" fill className={styles.heroImg} />
      </div>
    </div>
  );
}
