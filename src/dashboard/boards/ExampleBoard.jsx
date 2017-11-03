import React from 'react';
import Chart from '../Chart';
import { Grid } from 'semantic-ui-react';
import { staticData, labelDistribution, totalNodes, totalRelationships } from '../queries/overviewQueries'

export default () =>
  <Grid columns={3}>
    <Grid.Row>
      <Grid.Column>
        <Chart {...totalNodes} />
        <Chart {...totalRelationships} />
        <Chart {...staticData} />
        <Chart {...labelDistribution} />
        <Chart {...labelDistribution} chartType='pie' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
