/* @flow */
import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from './header.scss';

import { Row, Col, Menu, Popover } from 'antd';

import logo from '../../../images/fort-logo.jpg';

/**
 * Header component.
 * @extends React.Component
 */
export class Header extends Component {
  state = {
    menuMode: 'horizontal'
  };

  componentDidMount() {
    require('enquire.js')
      .register('only screen and (min-width: 320px) and (max-width: 940px)', {
        match: () => {
          this.setState({ menuMode: 'inline' });
        },
        unmatch: () => {
          this.setState({ menuMode: 'horizontal' });
        }
      });
  }

  /**
   * Render method.
   */
  render() {
    const { menuMode } = this.state;

    const menu = [
      <Menu mode={menuMode} className={styles.nav} key='nav'>
        <Menu.Item key='facebook'>
          <a href='https://www.facebook.com/atl4fort'>
            <i className='fa fa-facebook fa-2x'></i>
          </a>
        </Menu.Item>
        <Menu.Item key='twitter'>
          <a href='https://twitter.com/atl4fort'>
            <i className='fa fa-twitter fa-2x'></i>
          </a>
        </Menu.Item>
        <Menu.Item key='instagram'>
          <a href='https://www.instagram.com/atl4fort'>
            <i className='fa fa-instagram fa-2x'></i>
          </a>
        </Menu.Item>
        <Menu.Item key='github'>
          <a href='https://github.com/ecozoic/atl4fort'>
            <i className='fa fa-github fa-2x'></i>
          </a>
        </Menu.Item>
      </Menu>
    ];

    const popover = [
      <Popover overlayClassName='popover-menu'
               placement='bottomRight'
               content={menu}
               trigger='click'
               arrowPointAtCenter>
        <i className={`${styles.navIcon } fa fa-bars`} key='icon'></i>
      </Popover>
    ];

    return (
      <header className={styles.header}>
        { menuMode === 'inline' ? popover : null }
        <Row>
          <Col lg={4} md={6} sm={24} xs={24}>
            <Link to={'/'} className={styles.logo}>
              <img alt='logo' src={logo} />
              <span>Vincent Fort For Mayor</span>
            </Link>
          </Col>
          <Col lg={20} md={18} sm={17} xs={0}>
            { menuMode === 'horizontal' ? menu : null }
          </Col>
        </Row>
      </header>
    );
  }
}
