/* @flow */
import React, { Component } from 'react';

import styles from './vote-info.scss';

import { Button } from 'antd';

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
        <h2>Voter Info</h2>
        <p>
          Election Day: Tuesday, November 7, 2017
        </p>
        <p>
          Polls Open: November 7, 2017 - 07:00am EST
        </p>
        <p>
          Polls Close: November 7, 2017 - 07:00pm EST
        </p>
        <div className={styles.buttons}>
          <Button type='primary' size='large'>
            <i className='fa fa-thumbs-o-up'></i>
            Register to Vote!
          </Button>
          <Button type='primary' size='large'>
            <i className='fa fa-smile-o'></i>
            Volunteer!
          </Button>
        </div>
      </div>
    );
  }
}
