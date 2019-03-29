import React from 'react'
import { FaRegFileAlt } from 'react-icons/fa'
import Arrow from './Arrow'
import Circle from './Circle'

const TimelineEvent = ({ color = '#e0e0e0' }) => {
  return (
    <div>
      <Arrow color={color} />
      <Circle icon={FaRegFileAlt} color={color} />
    </div>
  )
}

export default TimelineEvent
