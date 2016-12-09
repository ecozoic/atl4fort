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
        <h2>On The Issues</h2>
        <ul>
          <li>
            <i className='fa fa-check-square-o'></i>
            Fair and affordable housing
          </li>
          <li>
            <i className='fa fa-check-square-o'></i>
            Free two year college for high school graduates
          </li>
          <li>
            <i className='fa fa-check-square-o'></i>
            Decriminalization of marijuana inside the city of ATL
          </li>
          <li>
            <i className='fa fa-check-square-o'></i>
            Creating a living wage
          </li>
          <li>
            <i className='fa fa-check-square-o'></i>
            Environmental justice
          </li>
          <li>
            <i className='fa fa-check-square-o'></i>
            Equality for all
          </li>
          <li>
            <i className='fa fa-check-square-o'></i>
            Police accountability
          </li>
          <li>
            <i className='fa fa-check-square-o'></i>
            Stop corporate takeover of community schools
          </li>
          <li>
            <i className='fa fa-check-square-o'></i>
            Investment in the arts
          </li>
        </ul>
      </div>
    );
  }
}
