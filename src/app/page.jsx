import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Home page</h1>
      <ul>
        <li><Link href="/" className={styles.link}>Home</Link></li>
        <li><Link href="/services" className={styles.link}>Services</Link></li>
        <li><Link href="/products" className={styles.link}>Products</Link></li>
        <li><Link href="/about" className={styles.link}>About</Link></li>
        <li><Link href="/contact" className={styles.link}>Contact me</Link></li>
        <li><Link href="/about/branches" className={styles.link}>Branches</Link></li>
        <li><Link href="/products/vegis" className={styles.link}>Vegies page</Link></li>
        <li><Link href="https://www.youtube.com/" target='_blanck' id={styles.specialLink}>you tube </Link></li>
      </ul>
    </>
  );
}
