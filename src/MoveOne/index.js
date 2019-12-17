/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Animated,
  Easing,
  ScrollView,
  Image,
} from 'react-native';

import ViewReflector from '../ViewReflector';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const BOX_MAX_HEIGHT = 110;
const BOX_MAX_WIDTH = 400;

export default class MoveOne extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: new Animated.Value(0),
    };
  }

  componentDidMount = () => {
    console.log('mounted');
  };

  boxPosition = x => {
    let c = 1.5 * (x - 1) + 1;
    let startPos = (height - BOX_MAX_HEIGHT) / 2;
    return this.state.scrollY.interpolate({
      inputRange: [0, BOX_MAX_HEIGHT],
      outputRange: [
        startPos + BOX_MAX_HEIGHT * c,
        startPos + BOX_MAX_HEIGHT * c * 0.5,
      ],
      extrapolate: 'extend',
      easing: Easing.linear,
    });
  };

  boxSize = (x, DIMENSION_SIZE) => {
    let c1 = (x * x) / 100;
    let c2 = ((6 - x) * (6 - x)) / 100;
    return this.state.scrollY.interpolate({
      inputRange: [0, BOX_MAX_HEIGHT],
      outputRange: [
        DIMENSION_SIZE + DIMENSION_SIZE * c1,
        DIMENSION_SIZE + DIMENSION_SIZE * c2 * -1,
      ],
      extrapolate: 'extend',
      easing: Easing.linear,
    });
  };
  render() {
    let ar = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
    ];
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
              <ViewReflector renderItem={this.renderView} />
            </Animated.View>
          );
        })}
        {/* <Animated.View
          style={{
            position: 'absolute',
            top: this.boxPosition(1),
            height: this.boxSize(1, BOX_MAX_HEIGHT),
            width: this.boxSize(1, BOX_MAX_WIDTH),
          }}>
          <ViewReflector renderItem={this.renderView} />
        </Animated.View>
        <Animated.View
          style={{
            position: 'absolute',
            top: this.boxPosition(2),
            height: this.boxSize(2, BOX_MAX_HEIGHT),
            width: this.boxSize(2, BOX_MAX_WIDTH),
          }}>
          <ViewReflector renderItem={this.renderView} />
        </Animated.View>
        <Animated.View
          style={{
            position: 'absolute',
            top: this.boxPosition(3),
            height: this.boxSize(3, BOX_MAX_HEIGHT),
            width: this.boxSize(3, BOX_MAX_WIDTH),
          }}>
          <ViewReflector renderItem={this.renderView} />
        </Animated.View>

        <Animated.View
          style={{
            position: 'absolute',
            top: this.boxPosition(4),
            height: this.boxSize(4, BOX_MAX_HEIGHT),
            width: this.boxSize(4, BOX_MAX_WIDTH),
          }}>
          <ViewReflector renderItem={this.renderView} />
        </Animated.View>
        <Animated.View
          style={{
            position: 'absolute',
            top: this.boxPosition(5),
            height: this.boxSize(5, BOX_MAX_HEIGHT),
            width: this.boxSize(5, BOX_MAX_WIDTH),
          }}>
          <ViewReflector renderItem={this.renderView} />
        </Animated.View>
        <Animated.View
          style={{
            position: 'absolute',
            top: this.boxPosition(6),
            height: this.boxSize(6, BOX_MAX_HEIGHT),
            width: this.boxSize(6, BOX_MAX_WIDTH),
          }}>
          <ViewReflector renderItem={this.renderView} />
        </Animated.View>

        <Animated.View
          style={{
            position: 'absolute',
            top: this.boxPosition(7),
            height: this.boxSize(7, BOX_MAX_HEIGHT),
            width: this.boxSize(7, BOX_MAX_WIDTH),
          }}>
          <ViewReflector renderItem={this.renderView} />
        </Animated.View>

        <Animated.View
          style={{
            position: 'absolute',
            top: this.boxPosition(8),
            height: this.boxSize(8, BOX_MAX_HEIGHT),
            width: this.boxSize(8, BOX_MAX_WIDTH),
          }}>
          <ViewReflector renderItem={this.renderView} />
        </Animated.View>

        <Animated.View
          style={{
            position: 'absolute',
            top: this.boxPosition(9),
            height: this.boxSize(9, BOX_MAX_HEIGHT),
            width: this.boxSize(9, BOX_MAX_WIDTH),
          }}>
          <ViewReflector renderItem={this.renderView} />
        </Animated.View>

        <Animated.View
          style={{
            position: 'absolute',
            top: this.boxPosition(10),
            height: this.boxSize(10, BOX_MAX_HEIGHT),
            width: this.boxSize(10, BOX_MAX_WIDTH),
          }}>
          <ViewReflector renderItem={this.renderView} />
        </Animated.View>

        <Animated.View
          style={{
            position: 'absolute',
            top: this.boxPosition(11),
            height: this.boxSize(11, BOX_MAX_HEIGHT),
            width: this.boxSize(11, BOX_MAX_WIDTH),
          }}>
          <ViewReflector renderItem={this.renderView} />
        </Animated.View>

        <Animated.View
          style={{
            position: 'absolute',
            top: this.boxPosition(12),
            height: this.boxSize(12, BOX_MAX_HEIGHT),
            width: this.boxSize(12, BOX_MAX_WIDTH),
          }}>
          <ViewReflector renderItem={this.renderView} />
        </Animated.View>

        <Animated.View
          style={{
            position: 'absolute',
            top: this.boxPosition(13),
            height: this.boxSize(13, BOX_MAX_HEIGHT),
            width: this.boxSize(13, BOX_MAX_WIDTH),
          }}>
          <ViewReflector renderItem={this.renderView} />
        </Animated.View> */}
        <ScrollView
          scrollEventThrottle={16}
          onScrollToTop={() => console.log('top reached')}
          onScroll={Animated.event([
            {nativeEvent: {contentOffset: {y: this.state.scrollY}}},
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
              resizeMode: 'contain',
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
    backgroundColor: '#667777',
  },
  scrollStyle: {
    flex: 1,
    height: 1200,
    width: width,
    backgroundColor: 'transparent',
  },
  boxStyle: {
    width: '100%',
    height: '100%',
    marginBottom: 2,
    borderRadius: 2,
  },
  row: {
    flexDirection: 'row',
    height: '100%',
    width: '100%',
    backgroundColor: '#ccddcc',
    borderRadius: 2,
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
    height: '10%',
    width: '50%',
    borderRadius: 4,
    backgroundColor: '#eeeeee',
    marginTop: '6%',
    marginLeft: '6%',
  },
  subTitle2: {
    height: '10%',
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
