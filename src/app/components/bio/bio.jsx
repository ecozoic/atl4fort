/* @flow */
import React, { Component } from 'react';

import styles from './bio.scss';

/**
 * Bio component.
 * @extends React.Component
 */
export class Bio extends Component {
  /**
   * Render method.
   */
  render() {
    return (
      <div className={styles.bio}>
        <h1>Bio</h1>
      </div>
    );
  }
}
