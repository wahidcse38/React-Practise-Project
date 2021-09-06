import React from 'react';
import './App.css';
import Main from './Components/Main';
import { BrowserRouter } from 'react-router-dom';
import myStore from './Redux/Store';
import { Provider } from 'react-redux';

function App() {
  //console.log(myStore.getState())
  return (
    <div className="App">
      <Provider store={myStore}>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
