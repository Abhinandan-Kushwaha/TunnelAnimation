import React from 'react';
import {View, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class Tester extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.boxStyle}>
          <View style={styles.row}>
            <View style={styles.column1} />
            <View style={styles.column2} />
          </View>
          <View style={styles.row} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  boxStyle: {
    width: '100%',
    height: '100%',
    marginBottom: 1,
  },
  row: {
    flexDirection: 'row',
    height: '50%',
    width: '100%',
    backgroundColor: '#00ff00',
  },
  column1: {
    height: '100%',
    width: '50%',
    backgroundColor: '#ffffff',
  },
  column2: {
    height: '100%',
    width: '50%',
    backgroundColor: '#0000ff',
  },
});
