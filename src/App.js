import Main from './components/MainComponent';
import './App.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { weather } from './Reducers/Weather';
import thunk from 'redux-thunk';

const store = createStore(weather, applyMiddleware(thunk));

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
