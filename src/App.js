import React, { Component } from 'react';
import Main from './Components/Main';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './Reducers/ConfigureStore'
import './App.css';

const store = ConfigureStore();

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <div>
            <Main />
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
