import React from 'react'
import {
  FaBug,
  FaCogs,
  FaPaperPlane,
  FaRegCalendarCheck,
  FaRegCheckCircle,
  FaRegFileAlt
} from 'react-icons/fa'
import Timeline from '../../src/Timeline'
import TimelineEvent from '../../src/TimelineEvent'

const App = props => {
  return (
    <Timeline minEvents={7} placeholder>
      <TimelineEvent
        icon={FaRegFileAlt}
        title='Em rascunho'
        subtitle='26/03/2019 09:51'
      />
      <TimelineEvent
        color='#87a2c7'
        icon={FaRegCalendarCheck}
        title='Agendado'
        subtitle='26/03/2019 09:51'
      />
      <TimelineEvent
        color='#ffcc00'
        icon={FaCogs}
        title='Processando'
        subtitle='26/03/2019 09:51'
      />
      <TimelineEvent
        color='#9c2919'
        icon={FaBug}
        title='Processando'
        subtitle='26/03/2019 09:51'
      />
      <TimelineEvent
        color='#3865a3'
        icon={FaPaperPlane}
        title='Enviando'
        subtitle='26/03/2019 09:51'
      />
      <TimelineEvent
        color='#64a338'
        icon={FaRegCheckCircle}
        title='Concluído'
        subtitle='26/03/2019 09:51'
      />
    </Timeline>
  )
}

export default App
