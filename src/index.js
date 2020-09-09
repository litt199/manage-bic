import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Admin from './admin'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Admin />
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
