import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/Footer'
import HeroImg from '../components/HeroImg'
import TimeLine from '../components/Timeline'
import CardComp from '../components/CardComp'

const IndexPage = (): React.ReactElement => {
  return (
    <>
      <main className='static z-[1000] h-full w-full bg-white'>
        <Header />
        <article>
          <figure>
            <HeroImg />
          </figure>
          <section className='mx-[5%] mb-8 flex justify-center'>
            <TimeLine />
          </section>
          <figure>
            <CardComp />
          </figure>
        </article>
        <Footer />
      </main>
    </>
  )
}

export default IndexPage
