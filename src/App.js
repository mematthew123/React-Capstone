import React, { Component } from 'react';
import Main from './Components/Main';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { ConfigureStore } from './Reducers/ConfigureStore'
import { Login } from './Reducers/Login';
import './App.css';

//const store = createStore(Login, applyMiddleware(thunk));
const store = ConfigureStore();

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
