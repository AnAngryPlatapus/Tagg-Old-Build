// @flow

import React from 'react';
import {
  TextInput,
  TouchableOpacity,
  Text,
  View
} from 'react-native';
import  styles from './styles'

type Props = {
  onLogin: Function,
  onEmailChange: Function,
  onPasswordChange: Function,
};

const Login = (props: Props) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType='email-address'
        underlineColorAndroid='transparent'
        returnKeyType="next"
        placeholder='Email'
        placeholderTextColor='rgba(225,225,225,0.7)'
        onChangeText={props.onEmailChange}
        {...props}
      />

      <TextInput style={styles.input}
        returnKeyType="go"
        placeholder='Password'
        placeholderTextColor='rgba(225,225,225,0.7)'
        underlineColorAndroid ='transparent'
        secureTextEntry
        onChangeText={props.onPasswordChange}
        {...props}
      />

      <TouchableOpacity style={styles.buttonContainer} onPress={props.onLogin}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>

    </View>
  );
};

export default Login;
