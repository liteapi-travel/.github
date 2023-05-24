import React from 'react'
import { allDocs } from 'contentlayer/generated'
import { notFound }from 'next/navigation'
import { getMDXComponent } from "next-contentlayer/hooks";
import Link from 'next/link';
import Pre from '../../(docsManipulation)/addCopy';

const fetchDoc = async (slug) => {
  const doc = allDocs.find((doc) => doc.slugAsParams === slug)
  if (!doc) {
    notFound();
  } 
  return doc
}

export async function generateStaticParams() {
  return allDocs.map((doc) => ({
    slug: doc.slugAsParams,
  }));
}
 

const page = async ({ params }) => {
  const doc = await fetchDoc(params.slug)
  const Content = getMDXComponent(doc.body.code)
  const docDate = new Date(doc.date)
  const month = docDate.toLocaleString('default', { month: 'short' });
  const date = `${month} ${docDate.getDay()}, ${docDate.getFullYear()}`
  const components = {
    pre: Pre,
  };

  return (
    <>
    <div className='w-full h-full flex flex-col mx-72 ml-0'>  
      <div className='flex flex-col justify-center mt-32 mx-80'>
        <div className=' place-self-start text-justify font-serif underline text-lg underline-offset-4 gramond'><Link href='/articles'>← Return to articles</Link></div>
        <div className=' text-left text-7xl mt-4 garamond font-thin place-self-start'>
          { doc.title }
        </div>
        <div className=' place-items-center place-content-start text-left px-0 m-0 font-serif text-lg'>
            By { doc.author }
        </div>
        <div className=' place-items-center place-content-start text-left px-0 m-0 '>
          { date }
        </div>
      </div>
      <div className=' article-p break-normal hyphens mx-auto mt-32 article-body text-justify font-serif font-light leading-9 underline-offset-8'>
          <Content components={components} />
      </div>

    </div>
    </>
  )
}

export default page