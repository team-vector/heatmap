import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import Header from './Header';
import List from './List';
import MapContainer from './MapContainer';

class App extends Component {
  render() {
    return (
      <>
      <Header />
      <main className={'wrapper'}>
        <Form />
        <List/>
        <MapContainer/>
      </main>
      </>
    );
  }
}

export default App;
