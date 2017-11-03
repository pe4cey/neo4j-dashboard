import React, { Component } from 'react';
import ChartWrapper from './ChartWrapper'
import { Group } from '@vx/group';
import { AreaClosed, Line, Bar } from '@vx/shape';
import { scaleLinear, scaleBand } from '@vx/scale';
import { Cypher } from 'bolt-components'
import { applyDataLimit } from './chartHelpers'
import { Segment } from 'semantic-ui-react'
import * as simpleMappers from './mappers/simple'

class CypherChartWrapper extends Component {
  constructor (props) {
    super(props)
    this.data = []
  }
  renderChart(res, tick) {
    this.data = (this.props.chartType === 'pie' || this.props.chartType === 'doughnut')
      ? simpleMappers.cypherResultToCircularChartData(res, this.data, this.props)
      : simpleMappers.cypherResultToXYChartData(res, this.data, tick, this.props)

   return <ChartWrapper {...this.props} data={this.data} />
  }
  render () {
    return (
      <Cypher
        interval={this.props.refreshInterval || 2}
        query={this.props.query}
        render={({pending, error, result, tick}) =>
          pending ? this.renderChart() : error ? error.message : this.renderChart(result, tick)
        }
      />
    );
  }
}

export default CypherChartWrapper
