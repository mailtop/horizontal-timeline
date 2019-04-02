import React, { Children, cloneElement, Fragment } from 'react'
import classNames from 'classnames'
import Grid from '@material-ui/core/Grid'
import CssBaseline from '@material-ui/core/CssBaseline'
import withStyles from '@material-ui/core/styles/withStyles'
import 'typeface-roboto'
import { PlaceholderSimple, Placeholder } from './Placeholder'

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
      placeholders.push(index)
      index++
    }

    return placeholders
  }
}

const Timeline = ({
  children,
  classes,
  simple,
  minEvents = 0,
  maxEvents = 0,
  placeholder
}) => {
  const difference = children ? minEvents - children.length : minEvents
  const placeholders = renderPlaceholders(difference, simple)
  const childrenWithProps = children
    ? Children.map(children, (child, index) =>
        cloneElement(child, {
          simple,
          placeholder,
          first: index === 0
        })
      )
    : []

  return (
    <div className={classes.wrapper}>
      <CssBaseline />
      <Grid className={classes.container}>
        {maxEvents ? (
          <Fragment>
            {childrenWithProps.map((child, index) => {
              return (
                <Fragment key={index}>
                  {index < maxEvents && (
                    <Grid
                      className={classNames({
                        [classes.middle]:
                          !simple && index > 0 && index < children.length
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
            {childrenWithProps.map((child, index) => {
              return (
                <Grid
                  key={index}
                  className={classNames({
                    [classes.middle]:
                      !simple && index > 0 && index < children.length
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
            {placeholders.map(placeholder => (
              <div
                key={placeholder}
                className={classNames({ [classes.middle]: !simple })}
              >
                {simple ? (
                  <PlaceholderSimple
                    first={placeholder === 0}
                    quantity={childrenWithProps.length}
                  />
                ) : (
                  <Placeholder />
                )}
              </div>
            ))}
          </Fragment>
        )}
      </Grid>
    </div>
  )
}

export default withStyles(styles)(Timeline)
