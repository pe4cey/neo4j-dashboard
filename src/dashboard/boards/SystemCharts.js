import React, { Component } from 'react';
import ChartWrapper from '../ChartWrapper';
import { Grid } from 'semantic-ui-react';
import { processCpuLoad, systemMemory, totalStoreSize } from '../queries/systemQueries'

export default () =>
  <Grid columns={3}>
    <Grid.Row>
      <Grid.Column>
        <Grid.Row>
          <Grid.Column>
            <ChartWrapper {...processCpuLoad} chartType='area' />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <ChartWrapper {...processCpuLoad} chartType='text' />
          </Grid.Column>
        </Grid.Row>
      </Grid.Column>
      <Grid.Column>
        <ChartWrapper {...systemMemory} chartType='pie' />
      </Grid.Column>
      <Grid.Column>
        <ChartWrapper {...totalStoreSize} chartType='text' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
