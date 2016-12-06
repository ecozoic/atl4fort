/* @flow */
import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';
import { Card, CardTitle, CardMedia } from 'material-ui/Card';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;

import styles from './home.scss';

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
        <AppBar title="Atl4Fort" />
        <Card>
          <CardMedia overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}>
            <img src="http://static.lakana.com/media.fox5atlanta.com/photo/2016/11/12/CxFdXLZUsAAH1yy_1478979144351_2273915_ver1.0_640_360.jpg" />
          </CardMedia>
        </Card>
        <BottomNavigation>
          <BottomNavigationItem
              label="Recents"
              icon={recentsIcon}
            />
            <BottomNavigationItem
              label="Favorites"
              icon={favoritesIcon}
            />
            <BottomNavigationItem
              label="Nearby"
              icon={nearbyIcon}
            />
        </BottomNavigation>
      </div>
    );
  }
}
