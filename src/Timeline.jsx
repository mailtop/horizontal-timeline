import React, { Children, cloneElement, Component, Fragment } from 'react'
import classNames from 'classnames'
import PerfectScrollbar from 'react-perfect-scrollbar'
import Grid from '@material-ui/core/Grid'
import CssBaseline from '@material-ui/core/CssBaseline'
import withStyles from '@material-ui/core/styles/withStyles'
import 'react-perfect-scrollbar/dist/css/styles.css'
import 'typeface-roboto'
import { PlaceholderSimple, Placeholder } from './Placeholder'

const styles = {
  wrapper: {
    position: 'relative',
    overflow: 'hidden'
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

class Timeline extends Component {
  componentDidMount() {
    const scrollbar = this.scrollbar
    scrollbar.scrollLeft = scrollbar.offsetWidth
  }

  render() {
    const {
      children,
      classes,
      height = 265,
      simple,
      minEvents = 0,
      maxEvents = 0,
      placeholder
    } = this.props
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
      <Grid className={classes.wrapper} style={{ height }}>
        <PerfectScrollbar containerRef={element => (this.scrollbar = element)}>
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
                  <Grid
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
                  </Grid>
                ))}
              </Fragment>
            )}
          </Grid>
        </PerfectScrollbar>
      </Grid>
    )
  }
}

export default withStyles(styles)(Timeline)
