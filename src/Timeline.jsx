import React, { Fragment } from 'react'
import classNames from 'classnames'
import Grid from '@material-ui/core/Grid'
import CssBaseline from '@material-ui/core/CssBaseline'
import withStyles from '@material-ui/core/styles/withStyles'
import 'typeface-roboto'
import Placeholder from './Placeholder'

const styles = {
  wrapper: {
    overflowX: 'auto'
  },
  container: {
    display: 'inline-flex',
    flex: '1 1 auto'
  },
  middle: {
    marginLeft: -10
  }
}

const renderPlaceholders = quantity => {
  if (quantity) {
    const placeholders = []
    let index = 0

    while (index < quantity) {
      placeholders.push(<Placeholder />)
      index++
    }

    return placeholders
  }
}

const Timeline = ({
  children,
  classes,
  minEvents = 0,
  maxEvents = 0,
  placeholder
}) => {
  const difference = minEvents - children.length
  const placeholders = renderPlaceholders(difference)

  return (
    <div className={classes.wrapper}>
      <CssBaseline />
      <Grid className={classes.container}>
        {maxEvents ? (
          <Fragment>
            {children.map((child, index) => {
              return (
                <Fragment key={index}>
                  {index < maxEvents && (
                    <Grid
                      className={classNames({
                        [classes.middle]: index > 0 && index < children.length
                      })}
                    >
                      {child}
                    </Grid>
                  )}
                </Fragment>
              )
            })}
          </Fragment>
        ) : (
          <Fragment>
            {children.map((child, index) => {
              return (
                <Grid
                  key={index}
                  className={classNames({
                    [classes.middle]: index > 0 && index < children.length
                  })}
                >
                  {child}
                </Grid>
              )
            })}
          </Fragment>
        )}
        {minEvents > 0 && difference > 0 && placeholder && (
          <Fragment>
            {placeholders.map((placeholder: Placeholder, index) => (
              <Grid key={index} className={classes.middle}>
                <Placeholder />
              </Grid>
            ))}
          </Fragment>
        )}
      </Grid>
    </div>
  )
}

export default withStyles(styles)(Timeline)
