/* @flow */
import React, { Component } from 'react';

import styles from './vote-info.scss';

/**
 * Vote info component.
 * @extends React.Component
 */
export class VoteInfo extends Component {
  /**
   * Render method.
   */
  render() {
    return (
      <div className={styles.voteInfo}>
        <h1>Vote Info</h1>
      </div>
    );
  }
}
