/* @flow */
import React, { Component } from 'react';

import styles from './platform.scss';

/**
 * Platform component.
 * @extends React.Component
 */
export class Platform extends Component {
  /**
   * Render method.
   */
  render() {
    return (
      <div className={styles.platform}>
        <h1>Platform</h1>
      </div>
    );
  }
}
