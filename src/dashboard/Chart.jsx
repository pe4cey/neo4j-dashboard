import React, { Component } from 'react';
import CypherChartWrapper from './CypherChartWrapper';
import ChartWrapper from './ChartWrapper';

export default (props) => {
  if (!props.type) return 'No chart type set'
  switch (props.type) {
    case 'cypher':
      return <CypherChartWrapper {...props}/>
    case 'json':
      return <ChartWrapper {...props}/>
    default:
      return `${props.type} is an invalid chart type`
  }
}
