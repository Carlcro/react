import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

function reducer(state = '', action) {
    console.log('i reducer: ' + state);
  return state
}

let store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));
