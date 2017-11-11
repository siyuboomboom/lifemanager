import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

class blockPage extends Component {
  render() {
    const tableData = [
      ['', ''],
      ['', ''],
      ['', ''],
      ['', ''],
      ['', '']
    ]
    return (
      <View>
        <Table style={{flexDirection: 'row'}}>
          {/* Left Wrapper */}
          <TableWrapper style={{width: 80}}>
            <TableWrapper style={{flexDirection: 'row'}}>
              <Col data={['Head2', 'Head3']} style={styles.head} heightArr={[56, 56]}/>
              <Col data={['Title', 'Title2', 'Title3', 'Title4']} style={styles.title} heightArr={[28, 28, 28, 28]} textStyle={styles.text}></Col>
            </TableWrapper>
          </TableWrapper>

          {/* Right Wrapper */}
          <TableWrapper style={{flex:1}}>
            <Rows data={tableData} style={{height: 28}}/>
          </TableWrapper>
        </Table>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  singleHead: { width: 80, height: 30, backgroundColor: '#c8e1ff' },
  head: { flex: 1, backgroundColor: '#c8e1ff' },
  title: { flex: 2, backgroundColor: '#f6f8fa' },
  text: { marginRight: 6, textAlign:'right' }
});

module.exports = blockPage;