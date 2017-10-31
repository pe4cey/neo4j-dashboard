import React, { Component } from 'react';
import ChartWrapper from '../ChartWrapper';
import { Grid } from 'semantic-ui-react';
import { labelDistribution, totalNodes } from '../queries/overviewQueries'

export default () =>
  <table>
    <tr>
      <td>
        <ChartWrapper {...labelDistribution} chartType='pie' />
      </td>
      <td>
        <ChartWrapper {...totalNodes} chartType='bar' />
      </td>
    </tr>
  </table>
