import React from 'react'
import Link from 'next/link'

function page({params}) {
  return (
    <div>
      <h1>vegi item {params.vegid}</h1>
      <br />
      <Link href="/products/vegis">back</Link>
    </div>
  )
}

export default page
