import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Twitter 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Sidebar />

        <Feed />
        
        {/* Widgets */}
      </main>

      
    </div>
  )
}

export default Home
