import React, { Component } from 'react';
import Main from './components/Main';
import { Provider } from 'react-redux';
import { ConfigureStore } from './Reducers/ConfigureStore'
import './App.css';
import { BrowserRouter } from 'react-router-dom';

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
