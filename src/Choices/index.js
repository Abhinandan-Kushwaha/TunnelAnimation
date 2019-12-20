import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Animated,
  Easing,
  Text,
} from 'react-native';
import ConstantVelocity from '../ConstantVelocity';
import Preview3D2 from '../Preview3D2';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default class Choices extends React.PureComponent {
  constructor(props) {
    super(props);
    this.animatedHand = new Animated.Value(0);
    this.animatedOpacity = new Animated.Value(1);
  }

  componentDidMount = () => {
    this.animateHand();
    this.animateOpacity();
  };

  animateHand() {
    this.animatedHand.setValue(0);
    Animated.timing(this.animatedHand, {
      toValue: 1,
      duration: 800,
      easing: Easing.linear,
    }).start(() => setTimeout(() => this.animateHand(), 600));
  }
  animateOpacity() {
    this.animatedOpacity.setValue(1);
    Animated.timing(this.animatedOpacity, {
      toValue: 0,
      duration: 3000,
      easing: Easing.linear,
    }).start();
  }
  render() {
    const marginHand = this.animatedHand.interpolate({
      inputRange: [0, 1],
      outputRange: [120, 0],
    });
    const handOpacity = this.animatedOpacity.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    });
    const {navigation} = this.props;
    const screen = navigation.getParam('screen');
    const mode = navigation.getParam('mode');
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.swipeIndicator, {opacity: handOpacity}]}>
          <Animated.Image
            source={require('../../images/swipeUpIcon.png')}
            style={[styles.handStyle, {marginTop: marginHand}]}
          />
        </Animated.View>
        <Animated.View
          style={[
            styles.textContainerStyle,
            {opacity: handOpacity},
            mode === 'render' ? {left: width / 2 - 34} : {left: width / 2 - 60},
          ]}>
          <Text style={styles.textStyle}>
            {mode === 'render' ? 'Scroll Up' : 'Scroll Up Slowly'}
          </Text>
        </Animated.View>
        {mode === 'render' ? (
          <ConstantVelocity screen={screen} />
        ) : (
          <Preview3D2 screen={screen} />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#667777',
  },
  swipeIndicator: {
    position: 'absolute',
    top: height / 2 - 100,
    left: width / 2 - 25,
    backgroundColor: '#667777',
  },
  handStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
  },
  textContainerStyle: {
    position: 'absolute',
    top: height / 2 - 132,
    backgroundColor: '#667777',
  },
  textStyle: {
    color: '#ddeeee',
    fontSize: 16,
  },
});
