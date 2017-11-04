/*
    ./client/components/App.jsx
*/
import React from 'react';
import Checkbox from './Checkbox.jsx';
import Button from './Button.jsx';
import SubredditPosts from './SubredditPosts.jsx';
import Header from './common/Header.jsx';
import styles from '../css/main.css';



export default class App extends React.Component {

  render() {
    return (
     <div style={{textAlign: 'center'}}>
        <h1>Hello World</h1>
        <Header />
        <Button/>
        <Checkbox />
        <SubredditPosts />
      </div>);
  }
}
