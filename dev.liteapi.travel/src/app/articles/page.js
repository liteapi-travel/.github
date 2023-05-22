import React from 'react'
import sortedDocs from '../(docsManipulation)/sortedDocs';
import Link from 'next/link';

const getPreview = ( raw ) => {
    const result = raw.split(new RegExp(' |\\n|\'\\n\'')).slice(0, 70).join(' ')
    console.log(result)
    return result
}

const articleDisplay = ( doc ) => {
    const link = `/articles/${doc.slugAsParams}`
    return (
        <>
            <div className=' w-10/12 border-b-2 border-b-black flex place-self-end mx-9 my-6'>
                <div className=' flex flex-row justify-evenly float-right'>
                    <div className=' underline text-lg mx-7 text-justify font-serif w-1/5'> <Link href={link}>{doc.title}</Link></div>
                    <div className='flex flex-col w-4/5 place-self-end text-justify font-serif'>
                        {getPreview(doc.body.raw)+ '...'}
                        <div className=' place-self-end underline text-justify font-serif'><Link href={link}>Read on →</Link></div>
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
                <div className=' place-self-start text-4xl text-justify font-serif '>Articles</div>
                <div className=' border-b-2 my-4 border-solid border-purple-900 w-full h-2'></div>
                <div className='flex flex-col w-full'>
                    {sortedDocs.map((doc) => articleDisplay(doc))}
                </div>  
            </div>
    </>
   )
}

export default page