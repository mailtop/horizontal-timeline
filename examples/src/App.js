import React from 'react'
import {
  FaBug,
  FaCogs,
  FaPaperPlane,
  FaRegCalendarCheck,
  FaRegCheckCircle,
  FaRegFileAlt
} from 'react-icons/fa'
import Grid from '@material-ui/core/Grid'
import withStyles from '@material-ui/core/styles/withStyles'
import Timeline from '../../src/Timeline'
import TimelineEvent from '../../src/TimelineEvent'

const styles = {
  container: {
    marginTop: 16
  }
}

const App = ({ classes }) => {
  return (
    <Grid container alignItems='center' className={classes.container}>
      <Grid item xs={12}>
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
            action={{
              label: 'Ver detalhes...',
              onClick: () => console.log('test')
            }}
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
            title='Erro'
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
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(App)
