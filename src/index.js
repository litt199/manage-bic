import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Admin from './admin'
import Home from './pages/Router_demo/router1/Home'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
