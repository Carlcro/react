import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const initialState = {
    name: 'Default name',
};

function nameReducer(state = initialState, action) {
    switch(action.type) {
        case 'CHECKBOX_CLICKED':
            return Object.assign({}, state, { name: action.name });
        default:
            return state;
    }
}

let store = createStore(nameReducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));
