import React from 'react'

const Arrow = ({ color }) => {
  return (
    <svg width={225} height={32} viewBox='0 0 59.531 8.467'>
      <g transform='translate(0 -288.533)'>
        <path
          d='M0 288.533h55.47l4.061 4.21L55.47 297H0l3.85-4.257z'
          fill={color}
          strokeWidth={0.241}
        />
        <circle
          r={1.522}
          cy={292.767}
          cx={29.766}
          fill='#fff'
          strokeWidth={0.15}
        />
      </g>
    </svg>
  )
}

export default Arrow
