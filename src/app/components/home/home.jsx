/* @flow */
import React, { Component } from 'react';

import styles from './home.scss';

import { Header } from '../header';
import { Footer } from '../footer';
import { Hero } from '../hero';
import { Platform } from '../platform';
import { Bio } from '../bio';
import { VoteInfo } from '../vote-info';

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
        <Header />
        <div className={styles.wrapper}>
          <Hero />
          <Platform />
          <Bio />
          <VoteInfo />
        </div>
        <Footer />
      </div>
    );
  }
}
