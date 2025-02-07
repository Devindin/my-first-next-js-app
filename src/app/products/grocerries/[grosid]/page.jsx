import React from 'react'

function page({params}) {
  return (
    <div>
      <h1>Grocerries item {params.grosid}</h1>
    </div>
  )
}

export default page
