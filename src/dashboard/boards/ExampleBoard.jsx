import React, { Component } from 'react';
import Chart from '../Chart';
import { Grid } from 'semantic-ui-react';
import { staticData, labelDistribution, totalNodes, totalRelationships } from '../queries/overviewQueries'

export default () =>
  <Grid columns={3}>
    <Grid.Row>
      <Grid.Column>
        <Chart {...staticData} />
      </Grid.Column>
      <Grid.Column>
      </Grid.Column>
      <Grid.Column>
        <Grid.Row>
          <Grid.Column>
            <Chart {...totalNodes} />
            <Chart {...totalRelationships} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
          </Grid.Column>
        </Grid.Row>
      </Grid.Column>
    </Grid.Row>
  </Grid>
