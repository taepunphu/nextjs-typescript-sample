import { observer } from 'mobx-react-lite'
import React, { Fragment } from 'react'
import { Container, Grid } from 'semantic-ui-react'
import { NavBar } from '../../src/app/layout/NavBar'
//import ActivityList from '../../src/features/activities/ActivityList'

const ActivityDashboard: React.FC = () => {
  return (
    <Fragment>
      <NavBar />
      <Container style={{ marginTop: '7em' }}>
        <Grid>
          <Grid.Column width={10}>
            <h2>Activity Filters</h2>
          </Grid.Column>
          <Grid.Column>
            <h2>Activity Filters</h2>
          </Grid.Column>
        </Grid>
      </Container>
    </Fragment>
  )
}

export default observer(ActivityDashboard)
