import React from 'react'
import { useState } from 'react'
import '../style/navigation.css'
import Stack from '@mui/material/Stack';
import { Button } from "@nextui-org/react";
import { Divider } from '@mui/material';

const navigationButtonCss =
{
  color:'#ffd333',
  fontFamily:'Ruda, sans-serif',
  fontSize:'70%',
  '&:hover':{
    borderBottom:'2px solid #ffd333',
    borderRadius:0
  },
  '&:focus':{
    border:'1px solid #ffd333',
    borderRadius:0
  }
}

function MainNavigation() {


  return (
    <div>
      <Stack direction = 'row' spacing = {0.05} divider={<Divider orientation="vertical" variant="middle" sx={{backgroundColor:'#ffd333'}} flexItem></Divider>}>
        <Button light size="sm" css={navigationButtonCss}>Detailed CV</Button>
        <Button light size="sm" css={navigationButtonCss}>Projects</Button>
        <Button light size="sm" css={navigationButtonCss}>Blog</Button>
        <Button light size="sm" css={navigationButtonCss}>Contacts</Button>
      </Stack>
    </div>
  )
}

export default MainNavigation