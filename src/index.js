import React from 'react';
import ReactDOM from 'react-dom';
import "./assets/style/index.scss";
import App from './App';
import * as serviceWorker from './serviceWorker';
import { hotjar } from 'react-hotjar';

hotjar.initialize(1884857, 6);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
