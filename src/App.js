import React from 'react';
import Main from './components/MainComponent';
import './App.css';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { login } from './Reducers/Login';
import thunk from 'redux-thunk';

const store = createStore(login, applyMiddleware(thunk));

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
