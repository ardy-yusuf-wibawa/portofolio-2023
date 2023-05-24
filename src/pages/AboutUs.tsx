import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProfileCard from '../components/ProfileCard'
import PortfolioComp from '../components/PortofolioComp'
import ContactUs from '../components/ContactForm'

const AboutUs = (): React.ReactElement => {
  return (
    <div className='z-[1000] w-full h-[100vh] mx-auto px-4'>
      <div className='static'>
        <Header />
      </div>
      <main>
        <div className='relative justify-center flex items-center pt-[100px] '>
          <ProfileCard />
        </div>
        <div className='relative justify-center flex items-center'>
          <PortfolioComp />
        </div>
        <div className='relative justify-center flex items-center'>
          <ContactUs />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default AboutUs
