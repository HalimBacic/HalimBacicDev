import { Text } from '@nextui-org/react'
import React from 'react'
import '../style/biography.css'

const textStyle = 
{
  fontFamily:'Ruda, sans-serif',
  color:'white'
}

function BiographySection({name, content}) {
  return (
    <div className='sectionStyle'>
        <Text size={40} extrabold css={textStyle}>{name}</Text>
        <Text size={25} light css={textStyle}>{content}</Text>
    </div>
  )
}

export default BiographySection