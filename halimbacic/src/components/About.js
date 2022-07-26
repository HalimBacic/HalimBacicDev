import { Box, Stack } from '@mui/material'
import React from 'react'
import '../style/about.css'
import { Progress } from "@nextui-org/react";

function About() {
  return (
    <div className='aboutContainer'>
              <Box className='leftBox' sx={{width:'27.8%', height:'100%'}}>
                <Box>One</Box>
                <Box>Two</Box>
              </Box> 
              <Box className='rightBox' sx={{width:'68%', height:'100%'}}>
                
              </Box>                
    </div>
  )
}

export default About