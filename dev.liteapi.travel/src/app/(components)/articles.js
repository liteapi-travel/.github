import React from 'react'
import { allDocs } from 'contentlayer/generated'
import CategoryElement from './categoryElement'

const article = ( doc ) => {
    return (
        <>
          <CategoryElement className=' w-10 h-9' description={doc.description} linkType={doc.title} color='red' link={'/articles/'+doc.slugAsParams}/>
        </>
    )
}

const page = async ({ params }) => {
  return (
    <>
        <div className='text-2xl float-left mb-3' id='articles' >Articles</div>
        <div className=' flex flex-row justify-between items-center flex-wrap'>
            {allDocs.map((doc) => article(doc))}
        </div>
        <div className=' border-b-2 my-7'></div>
    </>
  )
}

export default page