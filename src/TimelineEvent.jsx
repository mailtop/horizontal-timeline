import React, { Fragment } from 'react'
import classNames from 'classnames'
import Button from '@material-ui/core/Button'
import Tooltip from '@material-ui/core/Tooltip'
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
  iconSimple: {
    left: 16
  },
  circleContainer: {
    marginRight: 31
  },
  action: {
    '&:hover': {
      cursor: 'pointer'
    }
  },
  tooltip: {
    textAlign: 'center'
  },
  barSimple: {
    position: 'absolute',
    top: '50%',
    left: -31,
    width: 31,
    height: 3,
    backgroundColor: '#f2f2f2'
  },
  textContainer: {
    marginTop: -40,
    textAlign: 'center'
  },
  buttonContainer: {
    margin: '16px auto',
    textAlign: 'center'
  },
  button: {
    color: '#fff'
  }
}

const TimelineEvent = ({
  classes,
  simple,
  first,
  color = '#e0e0e0',
  icon: Icon,
  title,
  subtitle,
  action
}) => {
  return (
    <div className={classes.container}>
      {simple ? (
        <Fragment>
          <Tooltip
            title={
              <div className={classes.tooltip}>
                {title}
                <br />
                {subtitle}
              </div>
            }
          >
            <div
              onClick={action && action.onClick}
              className={classNames(classes.circleContainer, {
                [classes.action]: action
              })}
            >
              {Icon && (
                <Icon
                  className={classNames(classes.icon, classes.iconSimple)}
                />
              )}
              <svg viewBox='0 0 19.05 19.05' height={72} width={72}>
                <g transform='translate(0 -277.95)'>
                  <circle
                    cx={9.525}
                    cy={287.475}
                    r={9.525}
                    fill={color}
                    strokeWidth={0.193}
                  />
                </g>
              </svg>
            </div>
          </Tooltip>
          {!first && <div className={classes.barSimple} />}
        </Fragment>
      ) : (
        <Fragment>
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
        </Fragment>
      )}
    </div>
  )
}

export default withStyles(styles)(TimelineEvent)
