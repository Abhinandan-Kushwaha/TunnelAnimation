import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class Boxes extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.boxStyle}>
          <Image
            style={styles.imgStyle}
            source={require('../../images/field.jpg')}
          />
        </View>
        <LinearGradient colors={['#999', 'transparent']}>
          <View style={styles.boxStyleR}>
            <Image
              style={styles.imgStyle}
              source={require('../../images/field.jpg')}
            />
          </View>
        </LinearGradient>
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
  textStyle: {
    color: '#ffffff',
  },
  boxStyle: {
    width: 200,
    height: 200,
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
  },
  boxStyleR: {
    width: 200,
    height: 200,
    opacity: 0.2,
    transform: [{rotate: '180deg'}],
  },
  imgStyle: {height: '100%', width: '100%'},
});
