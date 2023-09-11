import React from 'react'
import '../style/about.css'
import {useState} from 'react'
import { Text } from '@nextui-org/react';

const textOne = {
  color:'#ffd333',
  fontFamily:'Josefin Sans, sans-serif',
  paddingBottom:'3vh',
  textGradient: "45deg, #ffd333 -20%, $red600 100%",
}

const textTwo={
  color:'#ffd333',
  fontFamily:'Josefin Sans, sans-serif',
  padingBottom:'1vh',
  textGradient: "45deg, #ffd333 -20%, $red600 100%"
}

function About() {


  return (
    <div className='aboutContainer'>
          <Text size={90} css={textOne}>Let's introduce me</Text>
          <Text size={40} css={textTwo}>Halim Bačić</Text>
          <Text size={30} css={textTwo}>Software developer</Text>
    </div>
  )
}

export default About