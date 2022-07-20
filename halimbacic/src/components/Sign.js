import { Stack } from '@mui/material'
import React from 'react'
import '../style/sign.css'

function Sign() {
  return (
    <div className='signGeneral'>
        <Stack direction='column' spacing={-10}>
            <p className='hugeSign sign'>Halim Bacic</p>
            <p className='smallSign sign'>Software developer</p>
            <Stack direction='column'>

            </Stack>
        </Stack>
    </div>
  )
}

export default Sign