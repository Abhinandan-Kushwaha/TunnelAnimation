/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Animated,
  ScrollView,
  Image,
} from 'react-native';

import ViewReflector from '../ViewReflector';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const BOX_MAX_HEIGHT = 100;
const BOX_MAX_WIDTH = 400;

export default class ConstantVelocity extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: new Animated.Value(0),
    };
  }

  getCumulativeDistance = x => {
    let s = 0,
      j;
    for (let i = 0; i < x; i++) {
      j = i + (i * i) / 8; ////changing the constants's value with an acceleration of 1/4
      s += 2 * (BOX_MAX_HEIGHT + (BOX_MAX_HEIGHT * j) / 3);
    }
    return s;
  };

  boxPosition = x => {
    let startPosition =
      height - BOX_MAX_HEIGHT - 60 + this.getCumulativeDistance(x);

    return this.state.scrollY.interpolate({
      inputRange: [0, 900],
      outputRange: [startPosition, 0],
      extrapolate: 'extend',
    });
  };

  boxSize = (x, DIMENSION_SIZE) => {
    x = x + (x * x) / 18; //changing the constants's value with an acceleration of 1/9
    let startSize = DIMENSION_SIZE + (DIMENSION_SIZE * x) / 3;
    let endSize = startSize / 20;

    return this.state.scrollY.interpolate({
      inputRange: [0, 900],
      outputRange: [startSize, endSize],
      extrapolate: 'extend',
    });
  };
  render() {
    const { screen } = this.props;
    let ar = [];
    for (let i = 0; i <= 18; i++) {
      ar[i] = i;
    }
    return (
      <View style={styles.container}>
        {ar.map(index => {
          return (
            <Animated.View
              style={{
                position: 'absolute',
                top: this.boxPosition(index),
                height: this.boxSize(index, BOX_MAX_HEIGHT),
                width: this.boxSize(index, BOX_MAX_WIDTH),
              }}>
              <ViewReflector
                renderItem={
                  screen === 'GeekyList' ? this.renderItem : this.renderView
                }
              />
            </Animated.View>
          );
        })}
        <ScrollView
          scrollEventThrottle={16}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { y: this.state.scrollY } } },
          ])}>
          <View style={styles.scrollStyle} />
        </ScrollView>
      </View>
    );
  }

  renderItem = () => {
    return (
      <View style={styles.boxStyle}>
        <View style={styles.row}>
          <Image
            style={{
              height: '100%',
              width: '100%',
            }}
            source={require('../../images/myn.png')}
          />
        </View>
      </View>
    );
  };

  renderView = () => {
    return (
      <View style={styles.boxStyle}>
        <View style={styles.row}>
          <View style={styles.leftPart}>
            <View style={styles.circle} />
            <View style={styles.nameStyle} />
          </View>
          <View style={styles.rightPart}>
            <View style={styles.titleStyle} />
            <View style={styles.subTitle1} />
            <View style={styles.subTitle2} />
            <View style={styles.subTitle2} />
            <View style={styles.dateStyle} />
            <View style={styles.buttonStyle} />
          </View>
        </View>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  scrollStyle: {
    flex: 1,
    height: height * 2 + 80, //1460,
    width: width,
    backgroundColor: 'transparent',
  },
  boxStyle: {
    width: '100%',
    height: '100%',
    marginBottom: 2,
    borderRadius: 8,
  },
  row: {
    flexDirection: 'row',
    height: '100%',
    width: '100%',
    backgroundColor: '#ccddcc',
    borderRadius: 8,
  },
  column1: {
    height: '100%',
    width: '50%',
    backgroundColor: '#ccddcc',
    borderRadius: 2,
  },
  column2: {
    height: '100%',
    width: '50%',
    backgroundColor: '#ccddcc',
    borderRadius: 2,
  },
  leftPart: {
    flex: 3,
    backgroundColor: '#dddddd',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightPart: {
    flex: 7,
    backgroundColor: '#cccccc',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  circle: {
    height: '70%',
    width: '64%',
    borderRadius: 50,
    backgroundColor: '#bbbbbb',
  },
  nameStyle: {
    height: '12%',
    width: '70%',
    borderRadius: 10,
    backgroundColor: '#bbbbbb',
    marginTop: '6%',
  },
  titleStyle: {
    height: '18%',
    width: '60%',
    borderRadius: 8,
    backgroundColor: '#eeeeee',
    marginTop: '6%',
    marginLeft: '6%',
  },
  subTitle1: {
    height: '9%',
    width: '50%',
    borderRadius: 4,
    backgroundColor: '#eeeeee',
    marginTop: '4%',
    marginLeft: '6%',
  },
  subTitle2: {
    height: '9%',
    width: '30%',
    borderRadius: 4,
    backgroundColor: '#eeeeee',
    marginTop: '2%',
    marginLeft: '6%',
  },
  dateStyle: {
    position: 'absolute',
    top: '8%',
    right: '5%',
    width: '16%',
    height: '8%',
    backgroundColor: '#eeeeee',
    borderRadius: 4,
  },
  buttonStyle: {
    position: 'absolute',
    bottom: '8%',
    right: '5%',
    height: '30%',
    width: '12%',
    backgroundColor: '#eeeeee',
    borderRadius: 30,
  },
});
