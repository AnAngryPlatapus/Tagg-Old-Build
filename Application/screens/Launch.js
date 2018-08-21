// @flow

import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { ButtonWithText } from '../components/Buttons';

import EStyleSheet from 'react-native-extended-stylesheet';


const styles = EStyleSheet.create({
  wrapper: {
    $launchBackground: '$primaryBlack',
    flexDirection: 'row',
  },
});

type navigation = {
  navigation: Object,
};

class Launch extends Component<navigation> {
  props: navigation;

  handleLoginPress = ()=> {
    console.log('navigate to login')
    this.props.navigation.navigate('LoginPage');
  };

  handleSignupPress = () => {
    console.log('navigate to signup');
    this.props.navigation.navigate('SignupPage');
 };

  render() {
    return (
      <Container backgroundColor={styles.$launchBackground}>
        <Logo />
            <ButtonWithText
              onLoginPress={this.handleLoginPress}
              onSignupPress={this.handleSignupPress}
            />
      </Container>
    );
  }
}

export default Launch;
