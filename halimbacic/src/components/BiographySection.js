import { Text } from '@nextui-org/react'
import React from 'react'
import '../style/biography.css'

function BiographySection({name, content}) {
  return (
    <div>
        <Text>{name}</Text>
        <Text>{content}</Text>
    </div>
  )
}

export default BiographySection