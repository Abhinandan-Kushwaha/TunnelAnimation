import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  Easing,
  ScrollView,
} from 'react-native';

import ViewReflector from '../ViewReflector';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const BOX_MAX_HEIGHT = 108;
const BOX_MAX_WIDTH = 300;

const arY1 = [
  1,
  0.7,
  0.5,
  0.4,
  0.32,
  0.24,
  0.2,
  0.16,
  0.14,
  0.09,
  0.04,
  0.03,
  0.02,
  0.01,
  0.01,
  0.01,
  0.01,
  0.01,
];

const arPos = [
  1.5,
  3,
  4,
  4.8,
  5.4,
  5.9,
  6.3,
  6.6,
  6.9,
  7.1,
  8.7,
  9.0,
  9.3,
  9.5,
  9.5,
  9.5,
  9.6,
  9.6,
  9.6,
  9.6,
];

export default class DemoAnimations extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: new Animated.Value(0),
    };
  }

  componentDidMount = () => {
    console.log('mounted');
    this.renderInfo();
  };

  renderItem = () => {
    return (
      <View style={styles.boxStyle}>
        <View style={styles.row}>
          <View style={styles.column1} />
          <View style={styles.column2} />
        </View>
        <View style={styles.row} />
      </View>
    );
  };

  renderInfo = () => {
    let y,
      y1,
      y2 = 0;
    for (let i = 0; i < 11; i++) {
      y = arPos[i];
      y1 = arY1[i];
      if (i === 0) {
        y2 = 2.5;
      } else if (i === 1) {
        y2 = 2.7;
      } else {
        y2 = 2.8 + (i - 2) / 10;
      }

      console.log('(', height - BOX_MAX_HEIGHT * y, ',', -2.6 * height, ')');
      console.log('(', BOX_MAX_HEIGHT * y1, ',', BOX_MAX_HEIGHT * y2 * -1, ')');
      console.log('(', BOX_MAX_WIDTH * y1, ',', BOX_MAX_WIDTH * y2 * -1, ')');
    }
  };

  boxPosition = x => {
    let y = arPos[x];
    //console.log('for x', x, 'pos', y);
    // if (x === 1) {
    //   y = 1.5;
    // } else if (x === 2) {
    //   y = 3;
    // } else {
    //   y = x + 1 - (x - 3) / 10;
    // }
    return this.state.scrollY.interpolate({
      inputRange: [0, height],
      outputRange: [height - BOX_MAX_HEIGHT * y, -2.6 * height],
      extrapolate: 'extend',
      easing: Easing.linear,
    });
  };

  boxSize = (x, DIMENSION_SIZE) => {
    const y1 = arY1[x];
    let y2 = 0;

    if (x === 0) {
      y2 = 2.5;
    } else if (x === 1) {
      y2 = 2.7;
    } else {
      y2 = 2.8 + (x - 2) / 10;
    }

    //console.log('for x =', x, ' y1', y1, 'y2', y2);

    return this.state.scrollY.interpolate({
      inputRange: [0, height],
      outputRange: [DIMENSION_SIZE * y1, DIMENSION_SIZE * y2 * -1],
    });
  };
  render() {
    /*const boxPosition2 = this.state.scrollY.interpolate({
      inputRange: [0, height],
      outputRange: [height - BOX_MAX_HEIGHT * 3, -2.6 * height],
      extrapolate: 'extend',
      easing: Easing.linear,
    });
    const boxPosition3 = this.state.scrollY.interpolate({
      inputRange: [0, height],
      outputRange: [height - BOX_MAX_HEIGHT * 4, -2.6 * height],
      extrapolate: 'extend',
      easing: Easing.linear,
    });
    const boxPosition4 = this.state.scrollY.interpolate({
      inputRange: [0, height],
      outputRange: [height - BOX_MAX_HEIGHT * 4.9, -2.6 * height],
      extrapolate: 'extend',
      easing: Easing.linear,
    });
    const boxPosition5 = this.state.scrollY.interpolate({
      inputRange: [0, height],
      outputRange: [height - BOX_MAX_HEIGHT * 5.7, -2.6 * height],
      extrapolate: 'extend',
      easing: Easing.linear,
    });
    const boxPosition6 = this.state.scrollY.interpolate({
      inputRange: [0, height],
      outputRange: [height - BOX_MAX_HEIGHT * 6.4, -2.6 * height],
      extrapolate: 'extend',
      easing: Easing.linear,
    });

    const boxHeight = this.state.scrollY.interpolate({
      inputRange: [0, height],
      outputRange: [BOX_MAX_HEIGHT, -2.5 * BOX_MAX_HEIGHT],
    });
    const boxHeight2 = this.state.scrollY.interpolate({
      inputRange: [0, height],
      outputRange: [0.7 * BOX_MAX_HEIGHT, -2.7 * BOX_MAX_HEIGHT],
    });
    const boxHeight3 = this.state.scrollY.interpolate({
      inputRange: [0, height],
      outputRange: [0.5 * BOX_MAX_HEIGHT, -2.8 * BOX_MAX_HEIGHT],
    });
    const boxHeight4 = this.state.scrollY.interpolate({
      inputRange: [0, height],
      outputRange: [0.4 * BOX_MAX_HEIGHT, -2.9 * BOX_MAX_HEIGHT],
    });
    const boxHeight5 = this.state.scrollY.interpolate({
      inputRange: [0, height],
      outputRange: [0.32 * BOX_MAX_HEIGHT, -3.0 * BOX_MAX_HEIGHT],
    });
    const boxHeight6 = this.state.scrollY.interpolate({
      inputRange: [0, height],
      outputRange: [0.26 * BOX_MAX_HEIGHT, -3.1 * BOX_MAX_HEIGHT],
    });*/

    const boxWidth = this.state.scrollY.interpolate({
      inputRange: [0, height],
      outputRange: [BOX_MAX_WIDTH, -2.5 * BOX_MAX_WIDTH],
    });
    const boxWidth2 = this.state.scrollY.interpolate({
      inputRange: [0, height],
      outputRange: [0.7 * BOX_MAX_WIDTH, -2.7 * BOX_MAX_WIDTH],
    });
    const boxWidth3 = this.state.scrollY.interpolate({
      inputRange: [0, height],
      outputRange: [0.5 * BOX_MAX_WIDTH, -2.8 * BOX_MAX_WIDTH],
    });
    const boxWidth4 = this.state.scrollY.interpolate({
      inputRange: [0, height],
      outputRange: [0.4 * BOX_MAX_WIDTH, -2.9 * BOX_MAX_WIDTH],
    });
    const boxWidth5 = this.state.scrollY.interpolate({
      inputRange: [0, height],
      outputRange: [0.32 * BOX_MAX_WIDTH, -3.0 * BOX_MAX_WIDTH],
    });
    const boxWidth6 = this.state.scrollY.interpolate({
      inputRange: [0, height],
      outputRange: [0.26 * BOX_MAX_WIDTH, -3.1 * BOX_MAX_WIDTH],
    });

    console.log('rendering');

    return (
      <View style={styles.container}>
        <Animated.View
          style={{
            position: 'absolute',
            top: this.boxPosition(17),
            height: this.boxSize(17, BOX_MAX_HEIGHT),
            width: this.boxSize(17, BOX_MAX_WIDTH),
          }}>
          <ViewReflector renderItem={this.renderItem} top={height - 200} />
        </Animated.View>
        <Animated.View
          style={{
            position: 'absolute',
            top: this.boxPosition(16),
            height: this.boxSize(16, BOX_MAX_HEIGHT),
            width: this.boxSize(16, BOX_MAX_WIDTH),
          }}>
          <ViewReflector renderItem={this.renderItem} top={height - 200} />
        </Animated.View>
        <Animated.View
          style={{
            position: 'absolute',
            top: this.boxPosition(15),
            height: this.boxSize(15, BOX_MAX_HEIGHT),
            width: this.boxSize(15, BOX_MAX_WIDTH),
          }}>
          <ViewReflector renderItem={this.renderItem} top={height - 200} />
        </Animated.View>
        <Animated.View
          style={{
            position: 'absolute',
            top: this.boxPosition(14),
            height: this.boxSize(14, BOX_MAX_HEIGHT),
            width: this.boxSize(14, BOX_MAX_WIDTH),
          }}>
          <ViewReflector renderItem={this.renderItem} top={height - 200} />
        </Animated.View>
        <Animated.View
          style={{
            position: 'absolute',
            top: this.boxPosition(13),
            height: this.boxSize(13, BOX_MAX_HEIGHT),
            width: this.boxSize(13, BOX_MAX_WIDTH),
          }}>
          <ViewReflector renderItem={this.renderItem} top={height - 200} />
        </Animated.View>
        <Animated.View
          style={{
            position: 'absolute',
            top: this.boxPosition(12),
            height: this.boxSize(12, BOX_MAX_HEIGHT),
            width: this.boxSize(12, BOX_MAX_WIDTH),
          }}>
          <ViewReflector renderItem={this.renderItem} top={height - 200} />
        </Animated.View>
        <Animated.View
          style={{
            position: 'absolute',
            top: this.boxPosition(11),
            height: this.boxSize(11, BOX_MAX_HEIGHT),
            width: this.boxSize(11, BOX_MAX_WIDTH),
          }}>
          <ViewReflector renderItem={this.renderItem} top={height - 200} />
        </Animated.View>
        <Animated.View
          style={{
            position: 'absolute',
            top: this.boxPosition(10),
            height: this.boxSize(10, BOX_MAX_HEIGHT),
            width: this.boxSize(10, BOX_MAX_WIDTH),
          }}>
          <ViewReflector renderItem={this.renderItem} top={height - 200} />
        </Animated.View>
        <Animated.View
          style={{
            position: 'absolute',
            top: this.boxPosition(9),
            height: this.boxSize(9, BOX_MAX_HEIGHT),
            width: this.boxSize(9, BOX_MAX_WIDTH),
          }}>
          <ViewReflector renderItem={this.renderItem} top={height - 200} />
        </Animated.View>
        <Animated.View
          style={{
            position: 'absolute',
            top: this.boxPosition(8),
            height: this.boxSize(8, BOX_MAX_HEIGHT),
            width: this.boxSize(8, BOX_MAX_WIDTH),
          }}>
          <ViewReflector renderItem={this.renderItem} top={height - 200} />
        </Animated.View>
        <Animated.View
          style={{
            position: 'absolute',
            top: this.boxPosition(7),
            height: this.boxSize(7, BOX_MAX_HEIGHT),
            width: this.boxSize(7, BOX_MAX_WIDTH),
          }}>
          <ViewReflector renderItem={this.renderItem} top={height - 200} />
        </Animated.View>
        <Animated.View
          style={{
            position: 'absolute',
            top: this.boxPosition(6),
            height: this.boxSize(6, BOX_MAX_HEIGHT),
            width: this.boxSize(6, BOX_MAX_WIDTH),
          }}>
          <ViewReflector renderItem={this.renderItem} top={height - 200} />
        </Animated.View>
        <Animated.View
          style={{
            position: 'absolute',
            top: this.boxPosition(5),
            height: this.boxSize(5, BOX_MAX_HEIGHT),
            width: this.boxSize(5, BOX_MAX_WIDTH),
          }}>
          <ViewReflector renderItem={this.renderItem} top={height - 200} />
        </Animated.View>
        <Animated.View
          style={{
            position: 'absolute',
            top: this.boxPosition(4),
            height: this.boxSize(4, BOX_MAX_HEIGHT),
            width: this.boxSize(4, BOX_MAX_WIDTH),
          }}>
          <ViewReflector renderItem={this.renderItem} top={height - 200} />
        </Animated.View>
        <Animated.View
          style={{
            position: 'absolute',
            top: this.boxPosition(3),
            height: this.boxSize(3, BOX_MAX_HEIGHT),
            width: this.boxSize(3, BOX_MAX_WIDTH),
          }}>
          <ViewReflector renderItem={this.renderItem} top={height - 200} />
        </Animated.View>
        <Animated.View
          style={{
            position: 'absolute',
            top: this.boxPosition(2),
            height: this.boxSize(2, BOX_MAX_HEIGHT),
            width: this.boxSize(2, BOX_MAX_WIDTH),
          }}>
          <ViewReflector renderItem={this.renderItem} top={height - 200} />
        </Animated.View>
        <Animated.View
          style={{
            position: 'absolute',
            top: this.boxPosition(1),
            height: this.boxSize(1, BOX_MAX_HEIGHT),
            width: this.boxSize(1, BOX_MAX_WIDTH),
          }}>
          <ViewReflector renderItem={this.renderItem} top={height - 200} />
        </Animated.View>
        <Animated.View
          style={{
            position: 'absolute',
            top: this.boxPosition(0),
            height: this.boxSize(0, BOX_MAX_HEIGHT),
            width: this.boxSize(0, BOX_MAX_WIDTH),
          }}>
          <ViewReflector renderItem={this.renderItem} top={height - 200} />
        </Animated.View>
        <ScrollView
          scrollEventThrottle={16}
          onScrollToTop={() => console.log('top reached')}
          onScroll={Animated.event([
            {nativeEvent: {contentOffset: {y: this.state.scrollY}}},
          ])}>
          <View
            style={{
              flex: 1,
              height: 1000,
              width: width,
              backgroundColor: 'transparent',
            }}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333333',
  },
  boxStyle: {
    width: '100%',
    height: '100%',
    marginBottom: 2,
  },
  row: {
    flexDirection: 'row',
    height: '50%',
    width: '100%',
    backgroundColor: '#33ee22',
  },
  column1: {
    height: '100%',
    width: '50%',
    backgroundColor: '#ee2233',
  },
  column2: {
    height: '100%',
    width: '50%',
    backgroundColor: '#3322ee',
  },
});
