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
import { Segment } from 'semantic-ui-react'

export default (props) => {

  const getChart = (type) => {
    switch (type) {
      case 'area':
        return <AreaGraph {...props}/>
      case 'bar':
        return <BarGraph {...props}/>
      case 'glyph':
        return <GlyphGraph {...props}/>
      case 'line':
        return <LineRadial {...props}/>
      case 'pie':
        return <RadialChart {...props}/>
      case 'text':
        return <Textual {...props}/>
      default:
        return <AreaGraph {...  props}/>
    }
  }
  return (
    <Segment>
      {getChart(props.chartType)}
      {(props.chartType !== 'text') ? <h2>{props.title}</h2> : null}
    </Segment>
  )
}
