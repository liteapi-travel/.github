import React from 'react'

function Article({ params }) {

  return (
    <h1>{ params.article }</h1>
  )
}

export default Article