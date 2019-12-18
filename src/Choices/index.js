import React from 'react';
import {View} from 'react-native';
import ConstantVelocity from '../ConstantVelocity';
import Preview3D2 from '../Preview3D2';

export default class Choices extends React.PureComponent {
  render() {
    const {navigation} = this.props;
    const screen = navigation.getParam('screen');
    const mode = navigation.getParam('mode');
    //Alert.alert(screen + ' ' + mode);
    return (
      <View>
        {mode === 'render' ? (
          <ConstantVelocity screen={screen} />
        ) : (
          <Preview3D2 screen={screen} />
        )}
      </View>
    );
  }
}
