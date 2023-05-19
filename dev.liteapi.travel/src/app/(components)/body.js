import React from 'react'
import Category from './category'

function Body() {
  return (
    <>
       <div className='flex flex-col justify-center mx-auto py-7 lg:w-[1000px]'>
          <div className='flex flex-col justify-center'>
            <Category name='SDK' id='sdk' />
            <Category name='Articles' id='article' />
          </div>
        </div>
    </>
  )
}

export default Body