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
        <h2>Voter Info</h2>
        <div className={styles.table}>
          <table>
            <tbody>
              <tr>
                <td>Election Day:</td>
                <td>Tuesday, November 7, 2017</td>
              </tr>
              <tr>
                <td>Polls Open:</td>
                <td>7:00am EST</td>
              </tr>
              <tr>
                <td>Polls Close:</td>
                <td>7:00pm EST</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.buttons}>
          <a href='https://registertovote.sos.ga.gov/GAOLVR/welcome.do#no-back-button' className={styles.button} target='_blank'>
            <i className='fa fa-thumbs-o-up'></i>
            Register to Vote!
          </a>
          <a href='https://act.myngp.com/Forms/-6565702230050011136' className={styles.button} target='blank'>
            <i className='fa fa-smile-o'></i>
            Volunteer!
          </a>
        </div>
        <p className={styles.hashtag}>
          <i className='fa fa-hashtag'></i>
          <span>MayTheFortBeWithYou</span>
        </p>
      </div>
    );
  }
}
