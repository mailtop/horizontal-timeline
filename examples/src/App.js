import React from 'react'
import Timeline from '../../src/Timeline'
import TimelineEvent from '../../src/TimelineEvent'

const App = props => {
  return (
    <Timeline>
      <TimelineEvent />
      <TimelineEvent color='#87a2c7' />
    </Timeline>
  )
}

export default App
