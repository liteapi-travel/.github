import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


function CategoryElement({ name, linkType, description, img, link, color }) {
  let imageClass = 'border border-solid rounded-xl '
  let linkClass = 'text-sm '
  if (!img) {
    imageClass += 'hidden'
  }
  if (linkType === 'Github') {
    linkClass += ' text-green-600'
  }else {
    linkClass += ` text-${color}-600`
  }

  return (
    <>  
        <div>
            <div>{ name }</div>
            <Link href={ ''+link } className={linkClass}> { linkType } </Link>
            <div className=' parent-cat-el w-72 text-red'>
                <p className='child-cat-el text-gray-400 text-sm break-normal hyphens'> { description } </p>
                <div className='child-cat-el anime-opacity '>
                <Image
                    src={ img }
                    width={350}
                    height={350}
                    alt={ description }
                    className={imageClass}
                />
                <div className=' my-10'></div>
                </div>
            </div>
        </div>

    </>
  )
}

export default CategoryElement