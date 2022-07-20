import React from 'react'
import '../style/home.css'
import MainNavigation from './MainNavigation'


function Home() {
  return (
    <div>
      <div className='maincontainer'>
        <MainNavigation></MainNavigation>
      </div>
    </div>
  )
}

export default Home