import Footer from '../components/Footer'
import React from 'react'
import Header from '../components/header/Header'
import CardComp from '../components/CardComp'

const ListPage = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <main>
        <section className='py-20'>
          <CardComp />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default ListPage
