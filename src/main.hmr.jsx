/* @flow */
import React from 'react';
import { render } from 'react-dom';

import { AppContainer } from 'react-hot-loader';

import injectTapEventPlugin from 'react-tap-event-plugin';

import { App } from './app';

// global styles
import './main.scss';

// favicon
import './favicon.ico';

injectTapEventPlugin();

const renderApp = () => {
  render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('app')
  );
};

renderApp();

if (module.hot) {
  module.hot.accept('./app', renderApp);
}
