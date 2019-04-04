import React, { Component } from 'react';
import './App.css';
import Procedure from './Procedure';
import ZipCode from './ZipCode';
import Header from './Header';
import HeatMap from './HeatMap';

class App extends Component {
  render() {
    return (
      <>
      <Header />
      <main className={'wrapper'}>
        <Procedure />
        <ZipCode />
        <HeatMap className={'map'}/>
      </main>
      </>
    );
  }
}

export default App;
