/* @flow */
import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from './header.scss';

import { Row, Col, Menu, Popover } from 'antd';

import logo from '../../../images/fort-logo-transparent.png';

/**
 * Header component.
 * @extends React.Component
 */
export class Header extends Component {
  state = {
    menuMode: 'horizontal'
  };

  setScrollEvent() {
    let lastKnownScrollY = 0;
    let ticking = false;

    const toggleHeaderClass = (scrollY) => {
      const header = this.node;

      if (scrollY > 0) {
        header.className = header.className.replace(styles.dark, '');
      } else {
        if (header.className.indexOf(styles.dark) < 0) {
          header.className += `${styles.dark}`;
        }
      }
    };

    window.addEventListener('scroll', function() {
      lastKnownScrollY = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(function() {
          toggleHeaderClass(lastKnownScrollY);
          ticking = false;
        });
      }
      ticking = true;
    });
  }

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

      this.setScrollEvent();
  }

  /**
   * Render method.
   */
  render() {
    const { menuMode } = this.state;

    const menu = (
      <Menu mode={menuMode} className={styles.nav}>
        <Menu.Item>
          <a href='https://www.facebook.com/atl4fort'>
            <i className='fa fa-facebook'></i>
          </a>
        </Menu.Item>
        <Menu.Item>
          <a href='https://twitter.com/atl4fort'>
            <i className='fa fa-twitter'></i>
          </a>
        </Menu.Item>
        <Menu.Item>
          <a href='https://www.instagram.com/atl4fort'>
            <i className='fa fa-instagram'></i>
          </a>
        </Menu.Item>
      </Menu>
    );

    const popover = (
      <Popover overlayClassName={styles.popoverMenu}
               placement='bottomRight'
               content={menu}
               trigger='click'
               arrowPointAtCenter>
        <i className={`${styles.navIcon } fa fa-bars`}></i>
      </Popover>
    );

    return (
      <header id='header' className={styles.header + ' ' + styles.dark} ref={node => this.node = node}>
        { menuMode === 'inline' ? popover : null }
        <Row>
          <Col lg={8} md={10} sm={24} xs={24}>
            <Link to={'/'} className={styles.logo}>
              <img alt='logo' src={logo} />
              <span>Vincent Fort For Mayor</span>
            </Link>
          </Col>
          <Col lg={16} md={14} sm={17} xs={0}>
            { menuMode === 'horizontal' ? menu : null }
          </Col>
        </Row>
      </header>
    );
  }
}
