import React from 'react'
import Link from 'next/link'
function page() {
    const vegies=[
        {
            id:1,
            veginame:"Brocoli"
        },
        {
            id:2,
            veginame:"Spinach"
        },
        {
            id:3,
            veginame:"Pumkin"
        },
        {
            id:4,
            veginame:"Beans"
        },
    ]
  return (
    <div>
      <h1>Vegis items</h1>

      <ul>
       {vegies.map((vegi)=>{
        return(
            <li><Link href={`/products/vegis/${vegi.veginame}`}>{vegi.veginame}</Link></li>
        )
       })}
      </ul>

    </div>
  )
}

export default page
