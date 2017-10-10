import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BarGraph from './dashboard/BarGraph';
import ChartWrapper from './dashboard/ChartWrapper';
import { v1 as neo4j } from 'neo4j-driver/lib/browser/neo4j-web.min.js'
import { Provider } from 'bolt-components'

class App extends Component {

  render() {
    const driver = neo4j.driver("bolt://0.0.0.0:7687", neo4j.auth.basic("neo4j", "newpassword"));
    return (
      <Provider driver={driver}>
        <div className="App">
          <ChartWrapper
            query={`call dbms.queryJmx('java.lang:type=OperatingSystem') yield attributes
              return attributes.ProcessCpuLoad.value as value`}
            title='CPU load'
            xLabel=''
            yLabel='CPU %'
          />
          <BarGraph margin={{top: 10, left: 10, right: 10, bottom: 10}}   />
        </div>
      </Provider>
    );
  }
}

export default App;
