import React, { Component } from 'react';
import AGraph from './AGraph'
import { Group } from '@vx/group';
import { AreaClosed, Line, Bar } from '@vx/shape';
import { scaleLinear, scaleBand } from '@vx/scale';
import { Cypher } from 'bolt-components'

class ChartWrapper extends Component {
  constructor (props) {
    super(props)
    this.tick = 0
    this.data = [{index: this.tick, value: 0}]
  }
  singleValueAsNumber = (result) => {
    const value = result.records[0].get(result.records[0].keys[0])
    const valueAsNumber = (value.toNumber) ? value.toNumber() : window.parseFloat(value) || 0
    return valueAsNumber
  }
  responseHandler (res) {
    const value = this.singleValueAsNumber(res)
    return [{value, index: ++this.tick}]
  }
  renderChart(res) {
    this.data = res ? [...this.data, ...this.responseHandler(res)] : this.data
    return (
      <div>
        <AGraph data={this.data} {...this.props}/>
        <h2>{this.props.title}</h2>
      </div>)
  }
  render () {
    return (
      <Cypher
        interval={2}
        query={this.props.query}
        render={({pending, error, result}) =>
          pending ? this.renderChart() : error ? error.message : this.renderChart(result)
        }
      />
    );
  }
}

export default ChartWrapper
