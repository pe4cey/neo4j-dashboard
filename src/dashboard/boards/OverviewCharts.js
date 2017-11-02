import React, { Component } from 'react';
import ChartWrapper from '../ChartWrapper';
import { Grid } from 'semantic-ui-react';
import { labelDistribution, totalNodes, totalRelationships } from '../queries/overviewQueries'

export default () =>
  <Grid columns={3}>
    <Grid.Row>
      <Grid.Column>
        <ChartWrapper {...labelDistribution} chartType='pie' />
      </Grid.Column>
      <Grid.Column>
        <ChartWrapper {...totalNodes} chartType='area' />
      </Grid.Column>
      <Grid.Column>
        <Grid.Row>
          <Grid.Column>
            <ChartWrapper {...totalNodes} chartType='text' />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <ChartWrapper {...totalRelationships} chartType='text' />
          </Grid.Column>
        </Grid.Row>
      </Grid.Column>
    </Grid.Row>
  </Grid>
