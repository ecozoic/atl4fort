/* @flow */
import React, { Component } from 'react';

import styles from './about.scss';

/**
 * About us component.
 * @extends React.Component
 */
export class About extends Component {
  /**
   * Render method.
   */
  render() {
    return (
      <div className={styles.about}>
        <h2>ATL 4 Fort</h2>
        <p>We are a group of Atlanta-based community organizers, activists, and volunteers working towards progressive change in our city. We believe that Senator Vincent Fort is the progressive leader that will best fight for real lasting change, and that's why we are supporting his 2017 campaign for Atlanta mayor.</p>
        <p>Check out Fort's positions on some important issues facing Atlantans today, and join us on November 7, 2017 as we vote for the change we want to see in the ATL!</p>
      </div>
    );
  }
}
