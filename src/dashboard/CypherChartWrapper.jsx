import React, { Component } from 'react';
import AreaGraph from './charts/AreaGraph'
import BarGraph from './charts/BarGraph'
import GlyphGraph from './charts/GlyphGraph'
import LineRadial from './charts/LineRadial'
import RadialChart from './charts/RadialChart'
import Textual from './charts/Textual'
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
  getChart (type) {
    switch (type) {
      case 'area':
        return <AreaGraph data={this.data} {...this.props} />
      case 'bar':
        return <BarGraph data={this.data} {...this.props} />
      case 'glyph':
        return <GlyphGraph data={this.data} {...this.props} />
      case 'line':
        return <LineRadial data={this.data} {...this.props} />
      case 'pie':
        return <RadialChart data={this.data} {...this.props} />
      case 'text':
        return <Textual data={this.data} {...this.props} />
      default:
        return <AreaGraph data={this.data} {... this.props} />
    }
  }
  renderChart(res, tick) {
    this.data = (this.props.chartType !== 'pie')
      ? simpleMappers.cypherResultToXYChartData(res, this.data, tick, this.props)
      : simpleMappers.cypherResultToCircularChartData(res, this.data, this.props)

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
