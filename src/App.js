import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChartWrapper from './dashboard/ChartWrapper';
import { v1 as neo4j } from 'neo4j-driver/lib/browser/neo4j-web.min.js'
import { Provider } from 'bolt-components'
import { Grid } from 'semantic-ui-react'

class App extends Component {

  render() {
    const driver = neo4j.driver("bolt://0.0.0.0:7687", neo4j.auth.basic("neo4j", "a"));
    return (
      <Provider driver={driver}>
        <div className="App">
          <Grid columns={2} divided>
            <Grid.Row>
              <Grid.Column>
                <ChartWrapper
                  query={`call dbms.queryJmx('java.lang:type=OperatingSystem') yield attributes
                    return attributes.ProcessCpuLoad.value as value`}
                  title='CPU load'
                  xLabel=' '
                  yLabel='CPU %'
                  chartType='area'
                />
              </Grid.Column>
              <Grid.Column>
                <ChartWrapper
                  query={`call dbms.queryJmx('java.lang:type=OperatingSystem') yield attributes
                    return attributes.ProcessCpuLoad.value as value`}
                  title='CPU load'
                  xLabel=' '
                  yLabel='CPU %'
                  chartType='area'
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <ChartWrapper
                  query={`call dbms.queryJmx('java.lang:type=OperatingSystem') yield attributes
                    return attributes.ProcessCpuLoad.value as value`}
                  title='CPU load'
                  xLabel=' '
                  yLabel='CPU %'
                  chartType='glyph'
                />
              </Grid.Column>
              <Grid.Column>
                <ChartWrapper
                  query={`MATCH (n) RETURN DISTINCT count(labels(n)) as value, labels(n) as key`}
                  title='Label distribution'
                  chartType='pie'
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </Provider>
    );
  }
}

export default App;
