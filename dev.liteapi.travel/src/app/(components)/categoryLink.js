import React from 'react'
import Link from 'next/link'

function CategoryLink( { ...props } ) {
  return (
    <>
      <Link href={ props.link } className='text-gray-600'> { props.name } </Link>
    </>
  )
}

export default CategoryLink