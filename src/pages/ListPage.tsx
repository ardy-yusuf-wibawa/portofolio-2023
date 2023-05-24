import Footer from '../components/Footer'
import React from 'react'
import Header from '../components/Header'
import CardComp from '../components/CardComp'

const ListPage = (): React.ReactElement => {
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
