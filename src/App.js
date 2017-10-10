import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BarGraph from './dashboard/BarGraph';
import AGraph from './dashboard/AGraph';
import { v1 as neo4j } from 'neo4j-driver/lib/browser/neo4j-web.min.js'
import Cypher from 'bolt-components/src/Cypher'

const driver = neo4j.driver("bolt://localhost", neo4j.auth.basic("neo4j", "password"));

class App extends Component {
  componentWillMount () {
    const connection = {
      username: 'neo4j',
      password: 'a',
      host: 'bolt://localhost:7687'
    };
    // return new Promise((resolve, reject) => {
    //   bolt.openConnection(
    //     connection,
    //     {},
    //     () => this.setState({connected: false})
    //   )
    //   .then(() => {
    //     () => this.setState({connected: true})
    //     resolve()
    //   })
    //   .catch(e => {
    //     () => this.setState({connected: false})
    //     reject(new Error('Error on connect'))
    //   })
    // })
  }
  render() {
    return (
      <div>
        <Cypher
          driver={driver}
          query='RETURN rand() as n'
          render={({pending, error, result}) => {
            return pending ? 'pending' : error ? error.message : result.records[0].get('n')
          }}
        />
        <div className="App">
          <BarGraph />
          <AGraph />
        </div>
      </div>
    );
  }
}

export default App;
