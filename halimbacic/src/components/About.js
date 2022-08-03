import { Box, Stack } from '@mui/material'
import React from 'react'
import '../style/about.css'
import { css, Button, Progress } from "@nextui-org/react";
import { FaLaptopCode } from 'react-icons/fa'
import { AiFillHome } from 'react-icons/ai'
import { useState } from 'react'

import {Animated} from "react-animated-css";



const buttonStyleUp = {
  borderColor: '#9b1d20',
  margin: 15,
  color: '#FA1C37',
  fontWeight: 700,
  fontSize: 16,
  textShadow: '1px 1px black',
  '&:hover': {
    textShadow: '1px 1px white, 2px 2px white',
    borderBottom: '2px solid #FA1C37',
    borderRadius:0
  }
}

const buttonStyleDown = {
  borderColor: '#9b1d20',
  color: '#FA1C37',
  fontWeight: 700,
  fontSize: 18,
  textShadow: '1px 1px black',
  borderUp: '3px solid #f4796b',
  '&:hover': {
    textShadow: '1px 1px white, 2px 2px white',
    borderBottom: '2px solid #FA1C37',
    borderRadius:0
  }
}

const simpleButton = {
  textShadow: '2px 2px black',
  color: '#FA1C37',
  fontSize: '1.4rem',
  height: '100%',
  width:'90%',
  fontFamily: 'Ruda, sans-serif',
  '&:hover': {
    textShadow: '1px 1px white, 2px 2px white',
    backgroundColor:'rgba(78, 205, 196, 0.3)'
  }
}


function About() {

  const [intro, setIntro] = useState(false);
  const [animationStatus, setanimationStatus] = useState(false);

  return (
    <div className='aboutContainer'>
      <div className='topPage'>  
        <Button light
          css={buttonStyleUp}
          icon={<AiFillHome className="iconCustom"></AiFillHome>}>
          Home
        </Button>
        <Stack direction="row" spacing={7} sx={{height:'100%'}}>
          <Button light css={simpleButton}>About me</Button>
          <Button light css={simpleButton}>Education</Button>
          <Button light css={simpleButton}>Experience</Button>
        </Stack>
        <Button light
          iconRight={<FaLaptopCode className="iconCustom"></FaLaptopCode>}
          css={buttonStyleDown}>
          Projects
        </Button>
      </div>
      <div className='bottomPage'>
        {
          intro &&
          <Box>
            I am Halim, software developer from Banja Luka.
            Let me to
          </Box>
        }
      </div>
    </div>
  )
}

export default About