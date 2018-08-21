import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import styles from './styles';

const AppContainer = ({ children, backgroundColor }) => {
  const containerStyles = [styles.AppContainer];
  if (backgroundColor) {
    containerStyles.push({ backgroundColor });
  }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={containerStyles}>
        {children}
      </View>
    </TouchableWithoutFeedback>
  );
}

AppContainer.PropTypes = {
  children: PropTypes.any,
  backgroundColor: PropTypes.string,
};

export default AppContainer;
