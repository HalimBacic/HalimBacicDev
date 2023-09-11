import React from 'react'
import '../style/home.css'
import About from './About'


function Home() {
  return (
    <div>
      <div className='maincontainer'>
        <div className='about'>
          <About></About>
        </div>
      </div>
    </div>
  )
}

export default Home