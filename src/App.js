import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import Header from './Header';
import HeatMap from './HeatMap';
import List from './List';

class App extends Component {
  render() {
    return (
      <>
      <Header />
      <main className={'wrapper'}>
        <Form />
        <HeatMap className={'map'}/>
        <List/>
      </main>
      </>
    );
  }
}

export default App;
