import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Header( { ...props } ) {
  return (
    <>
   <div className=' flex flex-row flex-nowrap items-center justify-between border-b border-gray-500 border-dotted mx-auto py-7 lg:w-[1000px] '>
        <div className='flex justify-between items-center flex-nowrap '>
          <Link href='/'>
            <Image
                  src= { props.logo }
                  width={100}
                  height={100}
                  alt='logo'
            />
          </Link>
            <div className=' ml-4'>LiteApi.Travel</div>
        </div>    
        <div>
            <Link href="https://github.com/liteapi-travel" className=' text-gray-500'>github.com/liteapi-travel</Link>
        </div>
    </div>
    </>
  )
}

export default Header