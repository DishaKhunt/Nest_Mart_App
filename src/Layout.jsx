import React from 'react'
import Header from './components/coustomer/Header'
import Carousel from './components/coustomer/Carousel'
import Content from './components/coustomer/Content'
import Footer from './components/coustomer/Footer'

export default function Layout() {
  return (
    <div>
        <Header/>
        <Carousel/>
        <Content/>
        <Footer/>
    </div>
  )
}
