import React from 'react'

const Circle = ({ color, icon }) => {
  return (
    <svg viewBox='0 0 19.05 19.05' height={72} width={72}>
      <g transform='translate(0 -277.95)'>
        <circle
          cx={9.525}
          cy={287.475}
          r={9.525}
          fill={color}
          strokeWidth={0.193}
        />
        <path
          d='M15.98 284.46q0 .333-.232.566l-6.031 6.03-1.133 1.134q-.233.233-.566.233-.334 0-.567-.233l-1.133-1.133-3.015-3.016q-.233-.233-.233-.566 0-.333.233-.566l1.133-1.133q.233-.234.566-.234.333 0 .567.234l2.449 2.457 5.464-5.473q.233-.233.566-.233.333 0 .567.233l1.133 1.133q.233.233.233.567z'
          fill='#fff'
          strokeWidth={0.008}
        />
      </g>
    </svg>
  )
}

export default Circle
