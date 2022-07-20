import React from 'react'
import Stack from '@mui/material/Stack'
import { Button } from '@mui/material'
import '../style/navigation.css'

const simpleButton = {
      size : '20%',
      color: '#FA1C37',
      fontSize: '2rem',
      fontFamily: 'Ruda, sans-serif'

}

function MainNavigation() {
  return (
    <div className='mainClass'>
        <Stack direction="column" spacing={3} sx={{mt:15, ml:15}}>
            <Button sx={simpleButton} className='simpleButtonCss'>About me</Button>
            <Button sx={simpleButton} className='simpleButtonCss'>Projects</Button>
            <Button sx={simpleButton} className='simpleButtonCss'>In progress</Button>
            <Button sx={simpleButton} className='simpleButtonCss'>Contacts</Button>
        </Stack>
    </div>
  )
}

export default MainNavigation