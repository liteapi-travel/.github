import React from 'react'
import CategoryElement from './categoryElement'
import sdkImage from '../(images)/coding.jpeg'


function Category( { name, id } ) {
  return (
    <>
        <div className='text-2xl float-left mb-3' id={id} >{ name }</div>
        <div className=' flex flex-row justify-between items-center flex-wrap'>
          <CategoryElement name='LiteApi' description='description' linkType='Github' link={'https://github.com/liteapi-travel/sdks'}/>
          <CategoryElement name='LiteApi' img={sdkImage} description='description' linkType='Github' link={'https://github.com/liteapi-travel/sdks'}/>
          <CategoryElement name='LiteApi' img={sdkImage} description='description' linkType='Github' link={'https://github.com/liteapi-travel/sdks'}/>
          <CategoryElement name='LiteApi' img={sdkImage} description='description' linkType='Github' link={'https://github.com/liteapi-travel/sdks'}/>
        </div>
        <div className=' border-b-2 my-7'></div>
    </>
  )
}

export default Category