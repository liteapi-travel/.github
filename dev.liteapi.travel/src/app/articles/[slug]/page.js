import React from 'react'
import { allDocs } from 'contentlayer/generated'
import { notFound }from 'next/navigation'
import { getMDXComponent } from "next-contentlayer/hooks";
import Image from 'next/image';
import LiteapiLogo from '@/app/(images)/liteapi.jpeg'
import Link from 'next/link';
import Footer from '@/app/(components)/footer';

const fetchDoc = async (slug) => {
  console.log(allDocs)
  const doc = allDocs.find((doc) => doc.slugAsParams === slug)
  if (!doc) {
    notFound();
  } 
  return doc
}

const page = async ({ params }) => {
  const doc = await fetchDoc(params.slug)
  const Content = getMDXComponent(doc.body.code)
  return (
    <>
    <div className='w-full h-full flex flex-col mx-72 ml-0'> 
      <div className=' flex flex-row flex-nowrap items-center justify-between border-b border-gray-500 mx-auto py-7 lg:w-[1000px] '>
        <div className='flex justify-between items-center flex-nowrap '>
            <Image
                src= { LiteapiLogo }
                width={100}
                height={100}
                alt='test'
            />
            <div className=' ml-4'>LiteApi.Travel</div>
        </div>      
        <div>
            <Link href="https://github.com/liteapi-travel" className=' text-gray-500'>github.com/liteapi-travel</Link>
        </div>
      </div>
      <div className='flex flex-col justify-center mx-auto mt-32'>
        <div className=' text-center text-7xl'>
          { doc.title }
        </div>
        <div className=' place-items-center place-content-start text-left px-0 m-0 '>
            By { doc.author }
        </div>
        <div className=' place-items-center place-content-start text-left px-0 m-0 '>
          { doc.date }
        </div>
      </div>
      <div className=' w-2/3 break-normal hyphens mx-auto mt-32'>
        <Content />
      </div>
      <div className=' '>
        <Footer />
      </div>

    </div>
    </>
  )
}

export default page