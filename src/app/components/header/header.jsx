/* @flow */
import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from './header.scss';

import Row from 'antd/lib/row';
import 'antd/lib/row/style/css';

import Col from 'antd/lib/col';
import 'antd/lib/col/style/css';

/**
 * Header component.
 * @extends React.Component
 */
export class Header extends Component {
  /**
   * Render method.
   */
  render() {
    return (
      <header className={styles.header}>
        <Row>
          <Col lg={4} md={6} sm={24} xs={24}>
            <Link to={'/'} className={styles.logo}>
              <img alt='logo' src='https://t.alipayobjects.com/images/rmsweb/T1B9hfXcdvXXXXXXXX.svg' />
              <span>ATL 4 Fort</span>
            </Link>
          </Col>
          <Col lg={20} md={18} sm={17} xs={0}>
          </Col>
        </Row>
      </header>
    );
  }
}
