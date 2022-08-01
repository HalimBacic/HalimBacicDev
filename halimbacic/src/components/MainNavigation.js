import React from 'react'
import { useState } from 'react'
import Stack from '@mui/material/Stack'
import { Box, Button } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import Sign from './Sign'
import '../style/navigation.css'
import MenuIcon from '@mui/icons-material/Menu';

const simpleButton = {
  size: '20%',
  color: '#FA1C37',
  fontSize: '2rem',
  fontFamily: 'Ruda, sans-serif'
}

const iconButton = { 
  color: '#FA1C37',
  top:10,
  left:10,
}

function MainNavigation() {

  const [isVisibleMenu, setisVisibleMenu] = useState(false);
  const [isVisibleAbout, setisVisibleAbout] = useState(true);

  const menuClick = () => {
    if (isVisibleAbout === true) {
      setisVisibleAbout(false);
      setisVisibleMenu(true);
    }
    else {
      setisVisibleAbout(true);
      setisVisibleMenu(false);
    }
  }

  return (
    <div>
      <Button sx={iconButton} size="large" onClick={menuClick} startIcon={<MenuIcon></MenuIcon>}>
        Menu
      </Button>
      {isVisibleAbout &&
        <Box id="firstInfoBox">

        </Box>
      }
      {isVisibleMenu &&
        <div className='mainClass'>
          <Stack direction="column" spacing={3} sx={{ mt: 15, ml: 15 }}>
            <Button sx={simpleButton} className='simpleButtonCss'>About me</Button>
            <Button sx={simpleButton} className='simpleButtonCss'>Projects</Button>
            <Button sx={simpleButton} className='simpleButtonCss'>In progress</Button>
            <Button sx={simpleButton} className='simpleButtonCss'>Contacts</Button>
          </Stack>
        </div>
      }
    </div>
  )
}

export default MainNavigation