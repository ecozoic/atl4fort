/* @flow */
import React from 'react';
import { render } from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';

import { App } from './app';

// global styles
import './main.scss';

// favicon
import './favicon.ico';

injectTapEventPlugin();

render(
  <App />,
  document.getElementById('app')
);
