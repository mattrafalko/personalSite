import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LogRocket from 'logrocket';
LogRocket.init(`${process.env.REACT_APP_LOG_ROCKET}`);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
