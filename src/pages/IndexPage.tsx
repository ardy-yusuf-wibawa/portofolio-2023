import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroImg from '../components/HeroImg'
import TimeLine from '../components/Timeline'
import CardComp from '../components/CardComp'

const IndexPage = (): React.ReactElement => {
  return (
    <div className='z-[1000] w-full h-[100vh]'>
      <div className='static'>
        <Header />
      </div>
      <main>
        <div>
          <HeroImg />
        </div>
        <div className='hidden sm:block'>
          <TimeLine />
        </div>
        <div>
          <CardComp />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default IndexPage
