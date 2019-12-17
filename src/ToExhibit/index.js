import React from 'react';
import {
  View,
  Text,
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

const arY1 = [1, 0.7, 0.5, 0.4, 0.32, 0.24, 0.2, 0.16, 0.12, 0.07, 0.02, 0.01];

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

export default class ToExhibit extends React.PureComponent {
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
    let y = arPos[x];
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

    console.log('for x =', x, ' y1', y1, 'y2', y2);

    return this.state.scrollY.interpolate({
      inputRange: [0, height],
      outputRange: [DIMENSION_SIZE * y1, DIMENSION_SIZE * y2 * -1],
    });
  };
  render() {
    return (
      <View style={styles.container}>
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
              height: 990,
              width: width,
              backgroundColor: 'transparent',
            }}
          />
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
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#334444',
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
});
