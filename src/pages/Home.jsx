import React from 'react'
import Hero from '../components/layout/Hero.jsx'
import Category from '../components/layout/Category.jsx'
import Product from './Product.jsx'

function Home() {
  return (
    <div>
      <Hero />
      <Category  />
      <Product />
    </div>
  )
}

export default Home