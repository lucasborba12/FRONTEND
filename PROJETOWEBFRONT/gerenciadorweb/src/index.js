import React from 'react';
import ReactDOM from 'react-dom';
import Home from './View/Home';
import Task from './View/Task'

import Rout from './routes/index';

ReactDOM.render(
  <React.StrictMode>
    <Rout />
  </React.StrictMode>,
  document.getElementById('root')
);


