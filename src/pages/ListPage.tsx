import Footer from '../components/Footer'
import React from 'react'
import Header from '../components/Header'
import CardComp from '../components/CardComp'
import SpeedDial from '../components/SpeedDial'

const ListPage =
  (): React.ReactElement => {
    return (
      <div>
        <SpeedDial />
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
