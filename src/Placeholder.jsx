import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = {
  container: {
    position: 'relative'
  },
  circleContainer: {
    marginRight: 31
  },
  barSimple: {
    position: 'absolute',
    top: '50%',
    left: -31,
    width: 31,
    height: 3,
    backgroundColor: '#f2f2f2'
  }
}

const Simple = ({ classes, first, quantity }) => {
  const Bar = () => <div className={classes.barSimple} />

  return (
    <div className={classes.container}>
      <div className={classes.circleContainer}>
        <svg viewBox='0 0 19.05 19.05' height={72} width={72}>
          <g transform='translate(0 -277.95)'>
            <circle
              cx={9.525}
              cy={287.475}
              r={9.525}
              fill='#f2f2f2'
              strokeWidth={0.193}
            />
          </g>
        </svg>
      </div>
      {quantity === 0 ? !first ? <Bar /> : null : <Bar />}
    </div>
  )
}

export const PlaceholderSimple = withStyles(styles)(Simple)

export const Placeholder = props => {
  return (
    <svg width={225} height={187} viewBox='0 0 59.531 49.477' {...props}>
      <g transform='matrix(.99959 0 0 .99838 -100.96 -38.57)'>
        <path
          d='M101.002 69.656h55.492l4.064 4.158-4.064 4.205h-55.492l3.85-4.205z'
          fill='#f2f2f2'
          strokeWidth={0.24}
        />
        <circle
          cx={130.726}
          cy={73.838}
          r={1.522}
          fill='#fff'
          strokeWidth={0.15}
        />
        <circle
          cx={130.78}
          cy={48.202}
          r={9.57}
          fill='#f2f2f2'
          strokeWidth={0.194}
        />
        <rect
          width={0.794}
          height={14.363}
          x={130.383}
          y={56.309}
          ry={0}
          fill='#f2f2f2'
          strokeWidth={0.108}
        />
        <g transform='translate(.661 -148.34)' fill='#f2f2f2'>
          <rect
            ry={0}
            y={228.581}
            x={115.485}
            height={4.009}
            width={29.266}
            strokeWidth={0.244}
          />
          <rect
            width={24.722}
            height={1.871}
            x={117.757}
            y={234.658}
            ry={0}
            strokeWidth={0.153}
          />
        </g>
      </g>
    </svg>
  )
}
