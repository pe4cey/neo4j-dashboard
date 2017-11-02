import React, { Component } from 'react';
import AreaGraph from './charts/AreaGraph'
import BarGraph from './charts/BarGraph'
import GlyphGraph from './charts/GlyphGraph'
import LineRadial from './charts/LineRadial'
import RadialChart from './charts/RadialChart'
import Textual from './charts/Textual'
import { Group } from '@vx/group';
import { AreaClosed, Line, Bar } from '@vx/shape';
import { scaleLinear, scaleBand } from '@vx/scale';
import { Cypher } from 'bolt-components'
import { applyDataLimit } from './chartHelpers'
import { Segment } from 'semantic-ui-react'

class ChartWrapper extends Component {
  constructor (props) {
    super(props)
    this.tick = 0
    this.data = []
    this.parentDimensions = {
      width: this.props.width,
      height: this.props.width
    }
  }
  valueAsNumber = (value) => {
    const number = (value.toNumber) ? value.toNumber() : window.parseFloat(value) || 0
    return (this.props.resultFormatter) ? this.props.resultFormatter(number) : number
  }
  singleValueAsNumber = (result) => {
    const value = result.records[0].get(result.records[0].keys[0])
    return this.valueAsNumber(value)
  }
  singleValueAsNumberWithLabel = (result) => {
    if (this.props.headings) {
      return result.records.map(rec => {
        return this.props.headings.map(heading => {
          return {
            label: heading,
            value: this.valueAsNumber(rec.get(heading))
          }
        })
      })[0]

    }
    return result.records.map(rec => {
      return {
        label: rec.get('key'),
        value: this.valueAsNumber(rec.get('value'))
      }
    })
  }
  responseHandler (res) {
    const y = this.singleValueAsNumber(res)
    return [{y, x: ++this.tick}]
  }
  responsePieHandler (res) {
    return this.singleValueAsNumberWithLabel(res)
  }
  getChart(type) {
    switch (type) {
      case 'area':
        return <AreaGraph data={this.data} {...this.parentDimensions} {...this.props}/>
      case 'bar':
        return <BarGraph data={this.data}  {...this.parentDimensions}  {...this.props}/>
      case 'glyph':
        return <GlyphGraph data={this.data} {...this.parentDimensions} {...this.props}/>
      case 'line':
        return <LineRadial data={this.data}  {...this.parentDimensions}  {...this.props}/>
      case 'pie':
        return <RadialChart data={this.data}  {...this.parentDimensions} {...this.props}/>
      case 'text':
        return <Textual data={this.data}  {...this.parentDimensions} {...this.props}/>
      default:
        return <AreaGraph data={this.data}  {...this.parentDimensions} {...this.props}/>
    }
  }
  renderChart(res, chartType) {
    if (chartType !== 'pie') {
      this.data = applyDataLimit(this.data)
      this.data = res ? [...this.data, ...this.responseHandler(res)] : this.data
      this.data = this.data.map((d, i) => {
        if (d) {
          d.x = i
        }
        return d
      })
    } else {
      this.data = res ? [...this.responsePieHandler(res)] : this.data
    }
    return (
      <Segment>
        {this.getChart(this.props.chartType)}
        {(this.props.chartType !== 'text') ? <h2>{this.props.title}</h2> : null}
      </Segment>)
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
