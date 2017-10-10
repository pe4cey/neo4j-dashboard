import React, { Component } from 'react';
import { Group } from '@vx/group';
import { AreaClosed, Line, Bar } from '@vx/shape';
import { scaleLinear, scaleBand } from '@vx/scale';
import { Cypher } from 'bolt-components'

class BarGraph extends Component {
  bindValuesToThis () {
    this.width = 500;
    this.height = 500;
    const margin = { top: 20, bottom: 20, left: 20, right: 20 };

    // Then we'll create some bounds
    const xMax = this.width - margin.left - margin.right;
    this.yMax = this.height - margin.top - margin.bottom;

    // We'll make some helpers to get at the this.data we want
    const x = d => d.index;
    const y = d => d.value;

    // And then scale the graph by our this.data
    this.xScale = scaleBand({
      rangeRound: [0, xMax],
      domain: this.data.map(x),
      padding: 0.4,
    });
    const yScale = scaleLinear({
      rangeRound: [this.yMax, 0],
      domain: [0, Math.max(...this.data.map(y))],
    });

    // Compose together the scale and accessor functions to get point functions
    const compose = (scale, accessor) => (data) => scale(accessor(data));
    this.xPoint = compose(this.xScale, x);
    this.yPoint = compose(yScale, y);
  }

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
    this.bindValuesToThis()

    this.data = [...this.data, ...this.responseHandler(res)]
    return (
      <div>
        <svg style={{border: 'solid 1px lightgrey'}} width={this.width} height={this.height}>
          {this.data.map((d, i) => {
            const barHeight = this.yMax - this.yPoint(d);
            return (
              <Group key={`bar-${i}`}>
                <Bar
                  x={this.xPoint(d)}
                  y={this.yMax - barHeight}
                  height={barHeight}
                  width={this.xScale.bandwidth()}
                  fill='#fc2e1c'
                />
              </Group>
            );
          })}
        </svg>
        <h2>CPU load</h2>
      </div>)
  }
  render (props) {
    return (
      <Cypher
        interval={2}
        query={`call dbms.queryJmx('java.lang:type=OperatingSystem') yield attributes
          return attributes.ProcessCpuLoad.value as value`}
        render={({pending, error, result}) =>
          pending ? 'pending' : error ? error.message : this.renderChart(result)
        }
      />
    );
  }
}

export default BarGraph
