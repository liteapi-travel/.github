import React from 'react'
import sortedDocs from '../(docsManipulation)/sortedDocs';
import Link from 'next/link';


const getPreview = ( raw ) => {
    const result = raw.split(new RegExp(' |\\n|\'\\n\'')).slice(0, 70).join(' ')
    return result
}

const articleDisplay = ( doc ) => {
    const link = `/articles/${doc.slugAsParams}`
    return (
        <>
            <div className=' w-10/12 border-b border-b-black flex place-self-end mx-9 my-6'>
                <div className=' flex flex-row justify-evenly float-right mt-5'>
                    <div className=' underline text-xl mx-7 font-serif w-2/6 tracking-wide underline-offset-2 font-medium'> <Link href={link}>{doc.title}</Link></div>
                    <div className='flex flex-col w-4/6 place-self-end text-left h-full font-serif font-light tracking-widest text-base'>
                        <div className=' leading-8'>
                            { getPreview(doc.body.raw)+ '...' }
                        </div>
                        <div className='place-self-start underline text-justify leading-6 font-serif mt-14 mb-32 underline-offset-8'><Link href={link}>Read on →</Link></div>
                    </div>
                </div>
            </div>
        </>

    )
}

function page() {
   return (
    <>
            <div className='flex flex-col justify-center items-center border-b border-gray-300 border-dotted mx-auto w-full py-7 lg:w-[1000px]'>
                <div className='text-2xl items-center flex justify-center text-center font-serif' >
                    Our articles offer valuable insights, practical solutions, and actionable tips <br/>
                     Empowering users to make informed decisions efficiently
                </div>
                <div className='mx-auto py-7 lg:w-[1000px] flex flex-row items-center justify-evenly w-0 h-0'>
                </div>
                <div className='sticky top-0 w-full pt-4 inherit-bg border-purple-900 border-b'>
                    <div className=' place-self-start text-4xl text-justify font-serif my-4'>Articles</div>
                </div>

                <div className='flex flex-col w-full'>
                    {sortedDocs.map((doc) => articleDisplay(doc))}
                </div>  
            </div>
    </>
   )
}

export default page