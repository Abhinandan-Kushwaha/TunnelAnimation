import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Animated,
  Easing,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import ConstantVelocity from '../ConstantVelocity';
import Preview3D2 from '../Preview3D2';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default class Choices extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      swipeIndicatorVisible: true,
    };
    this.animatedHand = new Animated.Value(0);
  }

  componentDidMount = () => {
    this.setState({swipeIndicatorVisible: true});
    this.animateHand();
  };

  animateHand() {
    this.animatedHand.setValue(0);
    Animated.timing(this.animatedHand, {
      toValue: 1,
      duration: 800,
      easing: Easing.linear,
    }).start(() => setTimeout(() => this.animateHand(), 600));
  }
  render() {
    const {swipeIndicatorVisible} = this.state;
    const marginHand = this.animatedHand.interpolate({
      inputRange: [0, 1],
      outputRange: [120, 0],
    });
    const {navigation} = this.props;
    const screen = navigation.getParam('screen');
    const mode = navigation.getParam('mode');
    return (
      <TouchableWithoutFeedback
        onPressIn={() => this.setState({swipeIndicatorVisible: false})}
        activeOpacity={1}
        style={styles.container}>
        <View style={styles.container}>
          {swipeIndicatorVisible && (
            <View style={styles.swipeIndicator}>
              <Animated.Image
                source={require('../../images/swipeUpIcon.png')}
                style={[styles.handStyle, {marginTop: marginHand}]}
              />
            </View>
          )}
          {swipeIndicatorVisible && (
            <View style={styles.textContainerStyle}>
              <Text style={styles.textStyle}>Scroll Up</Text>
            </View>
          )}
          {mode === 'render' ? (
            <ConstantVelocity screen={screen} />
          ) : (
            <Preview3D2 screen={screen} />
          )}
        </View>
      </TouchableWithoutFeedback>
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
    left: width / 2 - 34,
    backgroundColor: '#667777',
  },
  textStyle: {
    color: '#ddeeee',
    fontSize: 16,
  },
});
