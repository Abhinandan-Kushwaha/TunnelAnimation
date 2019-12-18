import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Animated,
  Easing,
  TouchableOpacity,
} from 'react-native';

export default class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      secondSectionVisible: false,
      drop1Visible: false,
      drop2Visible: false,
    };
    this.animatedValue = new Animated.Value(0);
    this.animatedDrop1 = new Animated.Value(0);
    this.animatedDrop2 = new Animated.Value(0);
    this.springValue = new Animated.Value(0.3);
  }
  animate() {
    this.animatedValue.setValue(0);
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 600,
      easing: Easing.linear,
    }).start();
  }

  animateDrop1() {
    this.animatedDrop1.setValue(0);
    Animated.timing(this.animatedDrop1, {
      toValue: 1,
      duration: 400,
      easing: Easing.linear,
    }).start();
  }

  animateDrop2() {
    this.animatedDrop2.setValue(0);
    Animated.timing(this.animatedDrop2, {
      toValue: 1,
      duration: 400,
      easing: Easing.linear,
    }).start();
  }
  spring() {
    this.springValue.setValue(0.5);
    Animated.spring(this.springValue, {
      toValue: 1,
      friction: 1,
    }).start(() => this.spring());
  }
  drop1Pressed = () => {
    this.setState({ drop1Visible: true, drop2Visible: false });
    const { secondSectionVisible } = this.state;
    this.animateDrop1();
    if (!secondSectionVisible) {
      this.setState({ secondSectionVisible: true });
      this.animate();
      this.spring();
    }
  };
  drop2Pressed = () => {
    this.setState({ drop2Visible: true, drop1Visible: false });
    const { secondSectionVisible } = this.state;
    this.animateDrop2();
    if (!secondSectionVisible) {
      this.setState({ secondSectionVisible: true });
      this.animate();
      this.spring();
    }
  };
  render() {
    const { secondSectionVisible, drop1Visible, drop2Visible } = this.state;
    const opacity = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    });
    const movingMargin = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [-1000, 0],
    });

    const marginDrop1 = this.animatedDrop1.interpolate({
      inputRange: [0, 1],
      outputRange: [-1000, 0],
    });

    const marginDrop2 = this.animatedDrop2.interpolate({
      inputRange: [0, 1],
      outputRange: [-1000, 0],
    });
    return (
      <View style={styles.container}>
        <View style={styles.section}>
          <View style={styles.drop1}>
            <TouchableOpacity style={styles.radio} onPress={this.drop1Pressed}>
              {drop1Visible && (
                <Animated.Image
                  source={require('../../images/water.png')}
                  style={[styles.waterDrop, { marginTop: marginDrop1 }]}
                />
              )}
            </TouchableOpacity>
            <Text style={styles.textStyle}>Render List</Text>
          </View>
          <View style={styles.drop2}>
            <TouchableOpacity style={styles.radio} onPress={this.drop2Pressed}>
              {drop2Visible && (
                <Animated.Image
                  source={require('../../images/water.png')}
                  style={[styles.waterDrop, { marginTop: marginDrop2 }]}
                />
              )}
            </TouchableOpacity>
            <Text style={styles.textStyle}>Preview List</Text>
          </View>
        </View>
        {secondSectionVisible && (
          <Animated.View
            style={[
              styles.section2,
              { opacity: opacity, marginBottom: movingMargin },
            ]}>
            <Animated.Text
              style={[
                styles.textStyleMargined,
                { transform: [{ scale: this.springValue }] },
              ]}>
              Select a layout
            </Animated.Text>
            {this.renderItem()}
            <Text style={styles.textStyleMargined}>OR</Text>
            {this.renderView()}
          </Animated.View>
        )}
      </View>
    );
  }
  renderItemPressed = () => {
    const { navigation } = this.props;
    const { drop1Visible } = this.state;
    let mode = '';
    if (drop1Visible) {
      mode = 'render';
    } else {
      mode = 'preview';
    }
    navigation.navigate('Choices', { screen: 'GeekyList', mode: mode });
  };

  renderViewPressed = () => {
    const { navigation } = this.props;
    const { drop1Visible } = this.state;
    let mode = '';
    if (drop1Visible) {
      mode = 'render';
    } else {
      mode = 'preview';
    }
    navigation.navigate('Choices', { screen: 'SimpleList', mode: mode });
  };
  renderItem = () => {
    return (
      <TouchableOpacity
        onPress={this.renderItemPressed}
        style={styles.boxStyle}>
        <View style={styles.row}>
          <Image
            style={{
              height: '100%',
              width: '100%',
            }}
            source={require('../../images/myn.png')}
          />
        </View>
      </TouchableOpacity>
    );
  };
  renderView = () => {
    return (
      <TouchableOpacity
        onPress={this.renderViewPressed}
        style={styles.boxStyle}>
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
      </TouchableOpacity>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#667777',
  },
  section: {
    flex: 0.34,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    borderRadius: 100,
    backgroundColor: '#99aaaa',
  },
  section2: {
    flex: 0.66,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4,
    borderRadius: 100,
    backgroundColor: '#99aaaa',
    paddingBottom: 30,
  },
  drop1: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 10,
    backgroundColor: '#667777',
  },
  drop2: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 16,
    borderRadius: 60,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#667777',
  },
  waterDrop: { resizeMode: 'contain', width: 50, height: 50 },
  radio: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#ddeeee',
    marginHorizontal: 10,
  },
  textStyle: {
    fontSize: 20,
    color: '#ddeeee',
  },
  textStyleMargined: {
    fontSize: 20,
    color: '#eeffff',
    marginVertical: 20,
  },
  boxStyle: {
    width: 320,
    height: 80,
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
