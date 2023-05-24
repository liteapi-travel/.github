import './style/globals.css'
import { Inter } from 'next/font/google'
import LiteapiLogo from './(images)/liteapi.jpeg'
import Header from './(components)/header'
import Footer from './(components)/footer'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'dev.liteapi',

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link href="https://fonts.cdnfonts.com/css/adobe-garamond-pro-2" rel="stylesheet" /> 
      </Head>
      <body className={inter.className}>
       <div className='w-full h-full flex flex-col mx-72 ml-0 wrapper'> 
          <Header logo={ LiteapiLogo }/>
            {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
