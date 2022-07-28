import { Box, Stack } from '@mui/material'
import React from 'react'
import '../style/about.css'
import { css, Button, Progress } from "@nextui-org/react";


const buttonStyle = {
  borderColor: '#9b1d20', 
  margin: 10,
  color: '#FA1C37', 
  fontWeight: 800,
  fontSize: 20,
  textShadow: '2px 2px black'
}

const simpleButton = {
  textShadow: '2px 2px black',
  color: '#FA1C37',
  fontSize: '2rem',
  fontFamily: 'Ruda, sans-serif',
  '&:hover':{
    textShadow: '1px 1px white, 2px 2px white'
  }
}

function About() {
  return (
    <div className='aboutContainer'>
      <div className='leftSide'>
      </div>
      <div className='rightSide'>
        <Button light
          css={buttonStyle}>HOME</Button>
        <Stack direction="column" spacing={7}>
          <Button light css={simpleButton}>About me</Button>
          <Button light css={simpleButton}>Education</Button>
          <Button light css={simpleButton}>Experience</Button>
        </Stack>
        <Button light
          css={buttonStyle}>PROJECTS</Button>
      </div>
    </div>
  )
}

export default About