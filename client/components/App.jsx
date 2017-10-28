/*
    ./client/components/App.jsx
*/
import React from 'react';
import Button from './Button.jsx'

export default class App extends React.Component {
  render() {
    return (
     <div style={{textAlign: 'center'}}>
        <h1>Hello World</h1>
        <Button/>
      </div>);
  }
}
