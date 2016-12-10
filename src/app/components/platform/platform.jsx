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
        <h2>Senator Fort Stands for:</h2>
        <ul>
          <li>
            <i className='fa fa-check-square-o'></i>
            Prioritizing fair and affordable housing
          </li>
          <li>
            <i className='fa fa-check-square-o'></i>
            Creating a living wage
          </li>
          <li>
            <i className='fa fa-check-square-o'></i>
            Decriminalizing cannabis inside the city of Atlanta
          </li>
          <li>
            <i className='fa fa-check-square-o'></i>
            Keeping police accountable
          </li>
          <li>
            <i className='fa fa-check-square-o'></i>
            Establishing free two year college for Atlanta high school graduates
          </li>
          <li>
            <i className='fa fa-check-square-o'></i>
            Prioritizing environmental justice
          </li>
          <li>
            <i className='fa fa-check-square-o'></i>
            Protecting equality for all people
          </li>
          <li>
            <i className='fa fa-check-square-o'></i>
            Ending corporate takeovers of community schools
          </li>
          <li>
            <i className='fa fa-check-square-o'></i>
            Investing in the arts
          </li>
        </ul>
      </div>
    );
  }
}
