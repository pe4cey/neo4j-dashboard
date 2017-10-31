import React, { Component } from 'react';
import AGraph from './AGraph'
import BarGraph from './BarGraph'
import GlyphGraph from './GlyphGraph'
import LineRadial from './LineRadial'
import RadialChart from './RadialChart'
import { Group } from '@vx/group';
import { AreaClosed, Line, Bar } from '@vx/shape';
import { scaleLinear, scaleBand } from '@vx/scale';
import { Cypher } from 'bolt-components'

class ChartWrapper extends Component {
  constructor (props) {
    super(props)
    this.tick = 0
    this.data = []
  }
  singleValueAsNumber = (result) => {
    const value = result.records[0].get(result.records[0].keys[0])
    const valueAsNumber = (value.toNumber) ? value.toNumber() : window.parseFloat(value) || 0
    return valueAsNumber
  }
  singleValueAsNumberWithLabel = (result) => {
    const valueAsNumber = (value) => (value.toNumber) ? value.toNumber() : window.parseFloat(value) || 0

    return result.records.map(rec => {
      return {
        label: rec.get('key'),
        value: valueAsNumber(rec.get('value'))
      }
    })
  }
  responseHandler (res) {
    const value = this.singleValueAsNumber(res)
    return [{value, index: ++this.tick}]
  }
  responsePieHandler (res) {
    return this.singleValueAsNumberWithLabel(res)
  }
  getChart(type) {
    switch (type) {
      case 'area':
        return <AGraph data={this.data} {...this.props}/>
      case 'bar':
        return <BarGraph data={this.data} {...this.props}/>
      case 'glyph':
        return <GlyphGraph data={this.data} {...this.props}/>
      case 'line':
        return <LineRadial data={this.data} {...this.props}/>
      case 'pie':
        return <RadialChart data={this.data} {...this.props}/>
      default:
        return <AGraph data={this.data} {...this.props}/>
    }
  }
  renderChart(res, chartType) {
    if (chartType !== 'pie') {
      this.data = res ? [...this.data.splice(0, 9), ...this.responseHandler(res)] : this.data
      this.data = this.data.splice(0, 9).map((d, i) => {
        if (d) {
          d.index = i
        }
        return d
      })
    } else {
      this.data = res ? [...this.responsePieHandler(res)] : this.data
    }
    return (
      <div>
        {
          this.getChart(this.props.chartType)
        }
        <h2>{this.props.title}</h2>
      </div>)
  }
  render () {
    return (
      <Cypher
        interval={2}
        query={this.props.query}
        render={({pending, error, result}) =>
          pending ? this.renderChart() : error ? error.message : this.renderChart(result, this.props.chartType)
        }
      />
    );
  }
}

export default ChartWrapper
