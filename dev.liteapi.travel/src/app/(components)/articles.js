import React from 'react'
import CategoryElement from './categoryElement'
import Link from 'next/link'
import sortedDocs from '@/app/(docsManipulation)/sortedDocs'

const article = ( doc ) => {
    return (
        <>
          <CategoryElement className=' w-10 h-9' description={doc.description} linkType={doc.title} color='red' link={'/articles/'+doc.slugAsParams} article={true}/>
        </>
    )
}

const page = () => {
    const latestDocs = sortedDocs.slice(0,3)
  return (
    <>
        <div className=' category-art flex flex-col'>
          <div className='text-2xl float-left mb-3' id='articles' >Articles</div>
          <div className='flex flex-col'>
              <div className=' grid grid-cols-3 els-art-wrapper gap-8'>
                  {latestDocs.map((doc) => article(doc))}
              </div>
              <div className=' text-blue-400 place-self-end'><Link href='/articles'>More Articles → </Link></div>
          </div>

          <div className=' border-b-2 my-7'></div>
        </div>

    </>
  )
}

export default page