import React from 'react'
import CategoryElement from './categoryElement'
import sdkImage from '../(images)/coding.jpeg'


function Category( { name, id } ) {
  return (
    <>
        <div className=' category flex flex-col justify-between '>
          <div className='text-2xl float-left mb-3' id={id} >{ name }</div>
          <div className=' grid grid-cols-3 els-wrapper border-b-2 my-7'>
            <CategoryElement name='LiteApi' description='description' linkType='Github' link={'https://github.com/liteapi-travel/sdks'}/>
            <CategoryElement name='LiteApi' img={sdkImage} description='description' linkType='Github' link={'https://github.com/liteapi-travel/sdks'}/>
            <CategoryElement name='LiteApi' img={sdkImage} description='description' linkType='Github' link={'https://github.com/liteapi-travel/sdks'}/>
            <CategoryElement name='LiteApi' img={sdkImage} description='description' linkType='Github' link={'https://github.com/liteapi-travel/sdks'}/>
            <CategoryElement name='LiteApi' img={sdkImage} description='description' linkType='Github' link={'https://github.com/liteapi-travel/sdks'}/>
          </div>
        </div>

    </>
  )
}

export default Category