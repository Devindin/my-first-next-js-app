import React from 'react'

function page({params}) {
  return (
    <div>
      <h1>meat item {params.id} review {params.id1}</h1>
    </div>
  )
}

export default page
