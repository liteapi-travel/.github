import React from 'react'
import CategoryLink from './categoryLink'

function HeadLine() {
  return (
   <>
    <div className='flex flex-col justify-center items-center border-b border-gray-300 border-dotted mx-auto w-full py-7 lg:w-[1000px]'>
       <div className='text-2xl items-center flex justify-center' >
            The fastest way to build travel apps. <br/>
            Launch your own hospitality product in weeks, not months
        </div>
        <div className='mx-auto py-7 lg:w-[1000px] flex flex-row items-center justify-evenly w-0 h-0'>
            <CategoryLink link='#sdk' name='SDK'/>
            <CategoryLink link='#articles' name='Articles'/>
        </div>
    </div>
   </> 
  )
}

export default HeadLine