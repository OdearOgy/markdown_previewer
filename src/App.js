import React, { Component } from 'react';
import './styles/main.css';
import Previewer from './components/previewer/Previewer';



export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Previewer />
      </div>
    )
  }
}
