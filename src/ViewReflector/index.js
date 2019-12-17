import React from 'react';
import {View, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class ViewReflector extends React.PureComponent {
  render() {
    const {renderItem, backgroundColor} = this.props;
    return (
      <View
        style={[styles.contentContainer, {backgroundColor: backgroundColor}]}>
        {renderItem()}
        <LinearGradient colors={['#667777', 'transparent']}>
          <View style={styles.reflectorStyle}>{renderItem()}</View>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  reflectorStyle: {
    transform: [{scaleY: -1}],
    opacity: 0.2,
    height: '85%',
    width: '100%',
  },
  contentContainer: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
