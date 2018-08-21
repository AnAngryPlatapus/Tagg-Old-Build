// @flow

import React from 'react';
import {
  TextInput,
  TouchableOpacity,
  Text,
  View
} from 'react-native';
import styles from './styles'

type Props = {
  onSignup: Function,
  onNameChange: Function,
  onEmailChange: Function,
  onPasswordChange: Function,
  onConfirmPasswordChange: Function,
};

const Signup = (props: Props) => {

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        underlineColorAndroid='transparent'
        returnKeyType="next"
        placeholder='Name'
        placeholderTextColor='rgba(225,225,225,0.7)'
        onChangeText={props.onNameChange}
        {...props}
      />
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
      <TextInput style={styles.input}
        returnKeyType="go"
        placeholder='Confirm Password'
        placeholderTextColor='rgba(225,225,225,0.7)'
        underlineColorAndroid ='transparent'
        secureTextEntry
        onChangeText={props.onConfirmPasswordChange}
        {...props}
      />
        <TouchableOpacity style={styles.buttonContainer} onPress={props.onSignup}>
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>

    </View>
  );
};


export default Signup;
