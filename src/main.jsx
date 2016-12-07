/* @flow */
import React from 'react';
import { render } from 'react-dom';

import { App } from './app';

// global styles
import './main.scss';

// favicon
import './favicon.ico';

render(
  <App />,
  document.getElementById('app')
);
