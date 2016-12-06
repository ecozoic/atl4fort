/* @flow */
import React, { Component } from 'react';

import styles from './home.scss';
import img from '../../../react.png';

/**
 * Home page component.
 * @extends React.Component
 */
export class Home extends Component {
  /**
   * Render method.
   */
  render() {
    return (
      <div className={styles.home}>
        <div>
          <img src={img} />
        </div>
        <h1>Atl4Fort!</h1>
      </div>
    );
  }
}
