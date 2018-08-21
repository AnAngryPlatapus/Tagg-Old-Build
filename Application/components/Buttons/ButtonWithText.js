// @flow

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

type LaunchProps = {
  onLoginPress: Function,
  onSignupPress: Function,
};

const ButtonWithText = ({
  onLoginPress,
  onSignupPress
}: LaunchProps)  => {

  return (

    <View style={styles.container}>

      <View style={styles.paddingRight}>
        <TouchableOpacity style={styles.button} onPress={onLoginPress}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.paddingLeft}>
      <TouchableOpacity style={styles.button} onPress={onSignupPress}>
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>
    </View>

  </View>
  );
};

export default ButtonWithText;
