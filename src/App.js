import React, { Component } from 'react';
import { v1 as neo4j } from 'neo4j-driver/lib/browser/neo4j-web.min.js'
import { Provider } from 'bolt-components'
import SystemCharts from './dashboard/boards/SystemCharts'
import OverviewCharts from './dashboard/boards/OverviewCharts'

class App extends Component {

  render() {
    const driver = neo4j.driver("bolt://0.0.0.0:7687", neo4j.auth.basic("neo4j", "a"));
    return (
      <Provider driver={driver}>
        <div className="App">
          <SystemCharts />
          <OverviewCharts />
        </div>
      </Provider>
    );
  }
}

export default App;
