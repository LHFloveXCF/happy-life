import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import store from './redux';
import { BrowserRouter } from 'react-router-dom';

if (module?.hot) {
  module.hot.accept();
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>

  </Provider>,
  document.getElementById('root')
);

