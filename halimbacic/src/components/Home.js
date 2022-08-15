import React from 'react'
import '../style/home.css'
import About from './About'
import Biography from './Biography'
import MainNavigation from './MainNavigation'


function Home() {
  return (
    <div>
      <div className='maincontainer'>
        <div className='navigation'>
          <MainNavigation></MainNavigation>
        </div>
        <div className='about'>
          <About></About>
        </div>
      </div>
    </div>
  )
}

export default Home