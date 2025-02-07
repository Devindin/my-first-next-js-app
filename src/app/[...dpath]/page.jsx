import React from 'react'

function page({params}) {
    console.log(params)
  return (
    <div>
      <h1>Catch all routes</h1>
      <ul>{params.dpath.map((item)=>{
        return(
            <li>
                {item}
            </li>
        )
      })}</ul>
    </div>
  )
}

export default page
