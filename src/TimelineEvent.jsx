import React from 'react'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = {
  container: {
    position: 'relative'
  },
  icon: {
    position: 'absolute',
    top: 16,
    left: 92.5,
    fontSize: 40,
    color: '#fff'
  },
  textContainer: {
    marginTop: -40,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop: 16,
    textAlign: 'center'
  },
  button: {
    color: '#fff'
  }
}

const TimelineEvent = ({
  classes,
  color = '#e0e0e0',
  icon: Icon,
  title,
  subtitle,
  action
}) => {
  return (
    <div className={classes.container}>
      {Icon && <Icon className={classes.icon} />}
      <svg width={225} height={187} viewBox='0 0 59.531 49.477'>
        <g transform='matrix(.99959 0 0 .99838 -100.96 -38.57)'>
          <path
            d='M101.002 69.656h55.492l4.064 4.158-4.064 4.205h-55.492l3.85-4.205z'
            fill={color}
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
            fill={color}
            strokeWidth={0.194}
          />
          <rect
            width={0.794}
            height={14.363}
            x={130.383}
            y={56.309}
            ry={0}
            fill={color}
            strokeWidth={0.108}
          />
        </g>
      </svg>
      <div className={classes.textContainer}>
        <Typography variant='h6'>{title}</Typography>
        <Typography variant='caption'>{subtitle}</Typography>
      </div>
      {action && (
        <div className={classes.buttonContainer}>
          <Button
            size='small'
            onClick={action.onClick}
            className={classes.button}
            style={{ backgroundColor: color }}
          >
            {action.label}
          </Button>
        </div>
      )}
    </div>
  )
}

export default withStyles(styles)(TimelineEvent)
