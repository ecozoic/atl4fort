/* @flow */
import React, { Component } from 'react';

import styles from './home.scss';

import { Header } from '../header';
import { Footer } from '../footer';
import { Hero } from '../hero';
import { Platform } from '../platform';
import { Bio } from '../bio';
import { VoteInfo } from '../vote-info';
import { About } from '../about';

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
          <About />
          <Platform />
          <Bio />
          <VoteInfo />
        </div>
        <Footer />
      </div>
    );
  }
}
