import React, { Component } from 'react';
import { v1 as neo4j } from 'neo4j-driver/lib/browser/neo4j-web.min.js'
import { Provider } from 'bolt-components'
import SystemCharts from './dashboard/boards/SystemCharts'
import OverviewCharts from './dashboard/boards/OverviewCharts'
import{ Segment } from 'semantic-ui-react'

class App extends Component {
  constructor(props) {
    super(props)
    this.driver = neo4j.driver("bolt://0.0.0.0:7687", neo4j.auth.basic("neo4j", "a"));
  }

  render() {
    return (
      <Provider driver={this.driver}>
        <Segment>
          <SystemCharts />
          <OverviewCharts />
        </Segment>
      </Provider>
    );
  }
}

export default App;
