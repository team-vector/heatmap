import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import Header from './Header';
import HeatMap from './HeatMap';

class App extends Component {
  render() {
    return (
      <>
      <Header />
      <main className={'wrapper'}>
        <Form />
        <HeatMap className={'map'}/>
      </main>
      </>
    );
  }
}

export default App;
