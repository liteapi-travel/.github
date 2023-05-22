import React from 'react'
import { allDocs } from 'contentlayer/generated'
import { notFound }from 'next/navigation'
import { getMDXComponent } from "next-contentlayer/hooks";

const fetchDoc = async (slug) => {
  const doc = allDocs.find((doc) => doc.slugAsParams === slug)
  if (!doc) {
    notFound();
  } 
  return doc
}

const page = async ({ params }) => {
  const doc = await fetchDoc(params.slug)
  const Content = getMDXComponent(doc.body.code)
  const docDate = new Date(doc.date)
  const month = docDate.toLocaleString('default', { month: 'short' });
  const date = `${month} ${docDate.getDay()}, ${docDate.getFullYear()}`

  return (
    <>
    <div className='w-full h-full flex flex-col mx-72 ml-0'> 
      <div className='flex flex-col justify-center mx-auto mt-32'>
        <div className=' text-center text-7xl'>
          { doc.title }
        </div>
        <div className=' place-items-center place-content-start text-left px-0 m-0 '>
            By { doc.author }
        </div>
        <div className=' place-items-center place-content-start text-left px-0 m-0 '>
          { date }
        </div>
      </div>
      <div className=' w-2/3 break-normal hyphens mx-auto mt-32 text-justify font-serif'>
        <Content />
      </div>

    </div>
    </>
  )
}

export default page