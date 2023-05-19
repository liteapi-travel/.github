import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


function CategoryElement({ linkType, description, img, link }) {
  return (
    <>  
        <div>
            <Link href={ ''+link } className='text-green-600 text-sm'> { linkType } </Link>
            <div className=' parent-cat-el w-full'>
                <p className='child-cat-el text-gray-400 text-sm'> { description } </p>
                <div className='child-cat-el anime-opacity'>
                <Image
                    src={ img }
                    width={350}
                    height={350}
                    alt={ description }
                />
                </div>
            </div>
        </div>

    </>
  )
}

export default CategoryElement