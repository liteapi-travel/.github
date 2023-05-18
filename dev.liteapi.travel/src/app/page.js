import Image from 'next/image'
import NuiteeLogo from './(images)/liteapi.jpeg'
import SDK from './(images)/coding.jpeg'
import Link from 'next/link'
export default function Home() {
  return (
    <>
    <div className='w-full h-96 flex flex-col mx-72 ml-0'> 
      <div className=' flex flex-row flex-nowrap items-center justify-between border-b border-gray-500 border-dotted mx-auto py-7 lg:w-[1000px] '>
        <div className='flex justify-between items-center flex-nowrap '>
         <Image
            src={NuiteeLogo}
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
        <div className='flex flex-col justify-center items-center border-b border-gray-300 border-dotted mx-auto w-full py-7 lg:w-[1000px]'>
          <div className='text-2xl items-center flex justify-center' >
          The fastest way to build travel apps. <br/>
          Launch your own hospitality product in weeks, not months
          </div>
          <div className='mx-auto py-7 lg:w-[1000px] flex items-center justify-center w-0 h-0'>
            <Link href='#sdk' className='text-gray-600'> SDK </Link>
          </div>
        </div>

        <div className='flex flex-col justify-center mx-auto py-7 lg:w-[1000px]'>
          <div className='flex flex-col justify-center'>
          <div className='text-2xl float-left mb-3' id='sdk'>SDK</div>
            <div className=' items-start'>
              <div>
                <Link href='https://github.com/liteapi-travel/sdks' className='text-green-600 text-sm'> GitHub </Link>
              </div>
              <div className='relative w-full'>
                <p className=' absolute top-0 left-0 text-gray-400 text-sm  '>Description</p>
                <div className=' hover:hidden'>
                <Image
                  src={SDK}
                  width={350}
                  height={350}
                  alt='test'
                  className='absolute top-0 left-0'
                />
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className=' absolute bottom-0 flex items-center justify-center w-full'>
          <p className=''> © liteAPI, Inc. All Rights Reserved.</p>
        </div>
    </div>

    </>
  )
}
