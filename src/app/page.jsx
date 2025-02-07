'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import img1 from "../../public/1.jpg";
import Button from "./(components)/Button";
import { useState } from "react";

export default function Home() {
  const[inputText , setInputText] = useState()

  const handleclick =(p1)=>{
    alert(p1)
  }
  const handlechange =(e)=>{
    setInputText(e.target.value)
  }
  return (
    <>
      <div>
        <h1>Home page</h1>
        <ul>
          <li>
            <Link href="/" className={styles.link}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/services" className={styles.link}>
              Services
            </Link>
          </li>
          <li>
            <Link href="/products" className={styles.link}>
              Products
            </Link>
          </li>
          <li>
            <Link href="/about" className={styles.link}>
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className={styles.link}>
              Contact me
            </Link>
          </li>
          <li>
            <Link href="/about/branches" className={styles.link}>
              Branches
            </Link>
          </li>
          <li>
            <Link href="/products/vegis" className={styles.link}>
              Vegies page
            </Link>
          </li>
          <li>
            <Link
              href="https://www.youtube.com/"
              target="_blanck"
              id={styles.specialLink}
            >
              you tube{" "}
            </Link>
          </li>
        </ul>
        <br />
        <p className="phara">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum dolor ab
          similique! Laudantium aspernatur repellendus facilis commodi et ipsum
          consequuntur sed assumenda! Voluptas neque inventore minima odio.
          Minima, earum facere?
        </p>
        <br />
        <h1>Image component</h1>
        <Image
          src={img1}
          alt="sample image"
          style={{ width: "100%", objectFit: "cover" }}
        />
        <br />
        <h1>Server component and client components</h1>
        <Button />
        <br />
        <br />
        <h1>Event handling , creting functions & Managing states</h1>
        <br />
        <input type="text" onChange={handlechange} />
        <button
          onClick={()=>handleclick("hi")}>
          Click event handle
        </button>
        <br />
        <p>Value is :{inputText}</p>
        <br />
        {inputText == "devindi" &&  <div>
          <h1>Members area</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quasi necessitatibus at aspernatur obcaecati corrupti magnam maxime asperiores minus veritatis aliquid totam, dolor tempora dolorem repellendus? Eaque unde officia sequi.</p>
        </div> }
        
        <br />
      </div>
    </>
  );
}
