import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import Header from './Header';
import MapContainer from './MapContainer';

class App extends Component {
  render() {
    return (
      <>
      <Header />
      <main className={'wrapper'}>
        <Form />
        <MapContainer/>
      </main>
      </>
    );
  }
}

export default App;
