import React from 'react';
import Main from './components/MainComponent';
import './App.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { login } from './Reducers/Login';
import thunk from 'redux-thunk';

const store = createStore(login, applyMiddleware(thunk));

function App() {
  return (
    <div>
      <Provider store={store}>
        <Main />
      </Provider>
    </div>
  );
}

export default App;
