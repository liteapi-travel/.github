import LiteapiLogo from './(images)/liteapi.jpeg'
import Footer from './(components)/footer'
import Body from './(components)/body'
import Header from './(components)/header'
import HeadLine from './(components)/headline'

export default function Home() {
  return (
    <>
    <div className='w-full h-96 flex flex-col mx-72 ml-0'> 
        <Header logo={ LiteapiLogo }/>
        <HeadLine/>
        <Body/>
        <Footer />
    </div>

    </>
  )
}
