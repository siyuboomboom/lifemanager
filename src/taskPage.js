
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import data from './task.json';
import {
  StyleSheet,
  View,
  ListView,
  Image,
  Text
} from 'react-native';

class taskPage extends Component {

  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = {
      dataSource: ds.cloneWithRows(data),
    };
  }

  renderRow(record) {
    return (
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <Icon style={styles.icon} name="square" size={20} color="#0f1b29" />
        </View>
        <View style={styles.info}>
          <Text style={styles.task}>{record.task}</Text>
          <Text style={styles.deadline}>{record.deadline}</Text>
        </View>
        <View style={styles.iconContainer}>
          <Icon style={styles.icon} name="clock" size={20} color="#0f1b29" />
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  row: {
    borderColor: '#f1f1f1',
    borderBottomWidth: 1,
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 20,
    paddingBottom: 20,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    height: 20,
    width: 20,
  },
  info: {
    flex: 1,
    paddingLeft: 25,
    paddingRight: 25,
  },
  task: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  deadline: {
    color: '#ccc',
    fontSize: 14,
  },
});

module.exports = taskPage;