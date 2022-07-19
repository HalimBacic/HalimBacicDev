import React from 'react'
import Stack from '@mui/material/Stack'
import { Button } from '@mui/material'
import '../style/navigation.css'

function MainNavigation() {
  return (
    <div>
        <Stack direction="column" spacing={2}>
            <Button className='simpleButton'></Button>
        </Stack>
    </div>
  )
}

export default MainNavigation