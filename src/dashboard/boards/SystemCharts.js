import React, { Component } from 'react';
import ChartWrapper from '../ChartWrapper';
import { Grid } from 'semantic-ui-react';
import { processCpuLoad, systemMemory } from '../queries/systemQueries'

export default () =>
  <table>
    <tr>
      <td>
        <ChartWrapper {...processCpuLoad} chartType='area' />
      </td>
      <td>
        <ChartWrapper {...processCpuLoad} chartType='area' />
      </td>
    </tr>
    <tr>
      <td>
        <ChartWrapper {...processCpuLoad} chartType='glyph' />
      </td>
      <td>
        <ChartWrapper {...systemMemory} chartType='pie' />
      </td>
    </tr>
  </table>
