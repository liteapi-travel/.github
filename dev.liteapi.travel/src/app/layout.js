import './globals.css'
import { Inter } from 'next/font/google'
import LiteapiLogo from './(images)/liteapi.jpeg'
import Header from './(components)/header'
import Footer from './(components)/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'dev.liteapi',

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <div className='w-full h-full flex flex-col mx-72 ml-0'> 
          <Header logo={ LiteapiLogo }/>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
