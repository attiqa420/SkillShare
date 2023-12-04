import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Posts from './components/Posts'
import data from '../src/Data'

function App() {

  const posts = data.map((item) => {
    return (
        <Posts 
        key = {item.id}
            img={item.coverImg}
            rating={item.stats.rating}
            reviewCount={item.stats.reviewCount}
            location={item.location}
            title={item.title}
            price={item.price}
        />
    )
})        

  return (
    <>
      <Navbar />
      <Hero />
      <section className="cards-list">
      {posts}
      </section>
    </>
  )
}

export default App
