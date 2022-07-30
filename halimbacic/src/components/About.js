import { Box, Stack } from '@mui/material'
import React from 'react'
import '../style/about.css'
import { css, Button, Progress } from "@nextui-org/react";
import {MdOutlineArrowDropUp} from 'react-icons/md'
import {MdOutlineArrowDropDown} from 'react-icons/md'



const buttonStyleUp = {
  borderColor: '#9b1d20', 
  margin: 15,
  marginLeft: '40%',
  color: '#FA1C37', 
  fontWeight: 700,
  fontSize: 16,
  width:1,
  textShadow: '1px 1px black',
  '&:hover':{
    textShadow: '1px 1px white, 2px 2px white'
  }
}

const buttonStyleDown = {
  borderColor: '#9b1d20', 
  margin: 15,
  marginLeft: '40%',
  color: '#FA1C37', 
  fontWeight: 700,
  fontSize: 18,
  width:1,
  textShadow: '1px 1px black',
  borderUp: '3px solid #f4796b',
  '&:hover':{
    textShadow: '1px 1px white, 2px 2px white'
  }
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

const smallTextButton = {
  borderColor: '#9b1d20', 
  margin: 15,
  marginLeft: '40%',
  color: '#FA1C37', 
  fontWeight: 700,
  fontSize: 15,
  width:1,
  textShadow: '1px 1px black',
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
          css={buttonStyleUp}
          iconRight={<MdOutlineArrowDropUp className="iconCustom"></MdOutlineArrowDropUp>}
          >HOME</Button>
        <Stack direction="column" spacing={7}>
          <Button light css={simpleButton}>About me</Button>
          <Button light css={simpleButton}>Education</Button>
          <Button light css={simpleButton}>Experience</Button>
        </Stack>
        <Button light
          iconRight={<MdOutlineArrowDropDown className="iconCustom"></MdOutlineArrowDropDown>}
          css={smallTextButton}>PROJECTS</Button>
      </div>
    </div>
  )
}

export default About