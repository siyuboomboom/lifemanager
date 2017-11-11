import React, { PureComponent } from 'react';
import { View, StyleSheet } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';

import taskPage from './taskPage.js';
import blockPage from './blockPage.js';
import timerPage from './timerPage.js';
const FourthRoute = () => <View style={[ styles.container, { backgroundColor: '#673ab7' } ]} />;

export default class MainApp extends PureComponent {
  state = {
    index: 0,
    routes: [
      { key: '1', title: 'Clock' },
      { key: '2', title: 'Tasks' },
      { key: '3', title: 'block' },
      { key: '4', title: 'trend' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => <TabBar {...props} />;

  _renderScene = SceneMap({
    '1': timerPage,
    '2': taskPage,
    '3': blockPage,
    '4': FourthRoute,
  });

  render() {
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});