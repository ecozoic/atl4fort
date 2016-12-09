/* @flow */
import React, { Component } from 'react';

import styles from './footer.scss';

/**
 * Footer component.
 * @extends React.Component
 */
export class Footer extends Component {
  /**
   * Render method.
   */
  render() {
    return (
      <footer className={styles.footer}>
        <ul>
          <li>
            <h2>Links</h2>
            <div>
              <a href='https://www.facebook.com/atl4fort'>
                <i className='fa fa-facebook'></i>
                <span>Facebook</span>
              </a>
            </div>
            <div>
              <a href='https://twitter.com/atl4fort'>
                <i className='fa fa-twitter'></i>
                <span>Twitter</span>
              </a>
            </div>
            <div>
              <a href='https://www.instagram.com/atl4fort'>
                <i className='fa fa-instagram'></i>
                <span>Instagram</span>
              </a>
            </div>
            <div>
              <a href='https://github.com/ecozoic/atl4fort'>
                <i className='fa fa-github'></i>
                <span>Github</span>
              </a>
            </div>
          </li>
        </ul>
      </footer>
    );
  }
}
