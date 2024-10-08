import React from 'react'
import FeaturedProducts from './FeaturedProducts'
import Categories from './Categories'
import MainSlider from './MainSlider'
import { Helmet } from 'react-helmet'

export default function Home() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
       
      </Helmet>
      <MainSlider />
      <Categories />
      <FeaturedProducts />
    </>
  )
}
