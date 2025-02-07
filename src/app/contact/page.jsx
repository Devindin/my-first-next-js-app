import React from 'react'
import Link from 'next/link'
import Styles from "./contact.module.css"
function page() {
  return (
    <div>
      <h1>contact page</h1>
      <Link href="/" className={Styles.link}>Home</Link>
    </div>
  )
}

export default page
