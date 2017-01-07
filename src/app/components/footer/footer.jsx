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
          </li>
          <li>
            <h2>Campaign</h2>
            <div>
              <a href='https://vincentfort.com/'>
                <span>Official Site</span>
              </a>
            </div>
            <div>
              <a href='https://registertovote.sos.ga.gov/GAOLVR/welcome.do#no-back-button'>
                <span>GA Voter Registration</span>
              </a>
            </div>
            <div>
              <a href='https://act.myngp.com/Forms/-6565702230050011136'>
                <span>Volunteer</span>
              </a>
            </div>
            <div>
              <a href='https://secure.actblue.com/contribute/page/vincentfort'>
                <span>Donate</span>
              </a>
            </div>
          </li>
          <li>
            <h2>Website</h2>
            <p>
              <a href='https://github.com/ecozoic/atl4fort'>ecozoic</a>
            </p>
          </li>
        </ul>
      </footer>
    );
  }
}
