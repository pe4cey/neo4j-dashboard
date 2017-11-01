import React, { Component } from 'react';
import ChartWrapper from '../ChartWrapper';
import { Grid } from 'semantic-ui-react';
import { processCpuLoad, systemMemory } from '../queries/systemQueries'

export default () =>
  <Grid columns={2}>
    <Grid.Row>
      <Grid.Column>
        <ChartWrapper {...processCpuLoad} chartType='area' />
      </Grid.Column>
      <Grid.Column>
        <ChartWrapper {...systemMemory} chartType='pie' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
