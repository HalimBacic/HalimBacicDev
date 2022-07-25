import { Box, Stack } from '@mui/material'
import React from 'react'
import '../style/about.css'

function About() {
  return (
    <div className='aboutContainer'>
              <Box className='leftBox' sx={{width:'30%', height:'90%'}}>
                HALIM
              </Box> 
              <Box className='rightBox' sx={{width:'60%', height:'90%'}}>
                BACIC
              </Box>                
    </div>
  )
}

export default About