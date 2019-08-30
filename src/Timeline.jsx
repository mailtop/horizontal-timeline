import React, { Children, cloneElement, Component, Fragment } from 'react'
import classNames from 'classnames'
import PerfectScrollbar from 'react-perfect-scrollbar'
import Grid from '@material-ui/core/Grid'
import CssBaseline from '@material-ui/core/CssBaseline'
import withStyles from '@material-ui/core/styles/withStyles'
import { Placeholder, PlaceholderSimple, PlaceholderSmall } from './Placeholder'

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

const renderPlaceholders = props => {
  const {
    classes,
    difference: quantity,
    variant = 'default',
    childrenWithProps
  } = props

  if (quantity) {
    const placeholders = []
    let index = 0

    while (index < quantity) {
      switch (variant) {
        case 'small':
          placeholders.push(
            <PlaceholderSmall
              key={index}
              first={index === 0}
              quantity={childrenWithProps.length}
            />
          )
          break
        case 'simple':
          placeholders.push(
            <PlaceholderSimple
              key={index}
              first={index === 0}
              quantity={childrenWithProps.length}
            />
          )
          break
        default:
          placeholders.push(
            <Grid key={index} className={classes.middle}>
              <Placeholder />
            </Grid>
          )
          break
      }

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
      variant = 'default',
      height = variant === 'small' ? 95 : variant === 'simple' ? 135 : 265,
      minEvents = 0,
      maxEvents = 0,
      placeholder
    } = this.props
    const difference = children ? minEvents - children.length : minEvents
    const childrenWithProps = children
      ? Children.map(children, (child, index) =>
          cloneElement(child, {
            variant,
            placeholder,
            first: index === 0
          })
        )
      : []
    const placeholders = renderPlaceholders({
      classes,
      difference,
      variant,
      childrenWithProps
    })

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
                              variant === 'default' &&
                              index > 0 &&
                              index < children.length
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
                          variant === 'default' &&
                          index > 0 &&
                          index < children.length
                      })}
                    >
                      {child}
                    </Grid>
                  )
                })}
              </Fragment>
            )}
            {minEvents > 0 && difference > 0 && placeholder && placeholders}
          </Grid>
        </PerfectScrollbar>
      </Grid>
    )
  }
}

export default withStyles(styles)(Timeline)
