import React from 'react'
import Category from './category'
import Articles from './articles'

function Body() {
  return (
    <>
       <div className='flex flex-col justify-center mx-auto py-7 lg:w-[1000px]'>
          <div className='flex flex-col justify-center'>
            <Category name='SDK' id='sdk' />
            <Category name='Research' id='research' />
            <Articles/>
          </div>
        </div>
    </>
  )
}

export default Body