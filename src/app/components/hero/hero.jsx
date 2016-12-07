/* @flow */
import React, { Component } from 'react';

import styles from './hero.scss';

/**
 * Hero component.
 * @extends React.Component
 */
export class Hero extends Component {
  /**
   * Render method.
   */
  render() {
    return (
      <div className={styles.hero}>
        <h1>Hero</h1>
      </div>
    );
  }
}
