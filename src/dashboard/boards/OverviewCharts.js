import React, { Component } from 'react';
import ChartWrapper from '../ChartWrapper';
import { Grid } from 'semantic-ui-react';
import { labelDistribution } from '../queries/overviewQueries'

export default () =>
  <Grid columns={2} divided>
    <Grid.Row>
      <Grid.Column>
        <ChartWrapper
          {...labelDistribution}
          chartType='pie'
        />
      </Grid.Column>
    </Grid.Row>
  </Grid>
