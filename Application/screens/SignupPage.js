// @flow

import React, { Component } from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  StatusBar,
} from 'react-native';

import { connect } from 'react-redux';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { Signup } from '../components/Form';

import {
  nameValidate,
  emailValidate,
  passwordValidate,
  passwordConfirm,
  createAccount,
} from '../actions/signup';

type Props = {
  dispatch: Function,
  name: string,
  email: string,
  password: string,
  confirmPassword: string,
};

class SignupPage extends Component<Props> {
  props: Props;

  //TODO hook up all to dispatch;
  handleCreateAccount = (isFetching: bool) => {
    this.props.dispatch(createAccount(isFetching));
  };
  handleNameChange = (name: string) => {
    this.props.dispatch(nameValidate(name));
  };
  handleEmailChange = (email: string) => {
    this.props.dispatch(emailValidate(email));
  };
  handlePasswordChange = (password: string) => {
    this.props.dispatch(passwordValidate(password));
  };
  handleConfirmPassword = (password: string) => {
    this.props.dispatch(passwordConfirm(password));
  };

  render() {
    return (
      <Container>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <Logo />
        <KeyboardAvoidingView behavior="padding">

        <Signup
          onNameChange={this.handleNameChange}
          onEmailChange={this.handleEmailChange}
          onPasswordChange={this.handlePasswordChange}
          onConfirmPasswordChange={this.handleConfirmPassword}

          onSignup={this.handleCreateAccount}
         />

       </KeyboardAvoidingView>
      </Container>
    );
  }
}


const mapStateToProps = (state) => {


  const name = state.signup.name;
  const email = state.signup.email;
  const password = state.signup.password;
  const confirmPassword = state.signup.confirmPassword;

  const isFetching = state.signup.isFetching;

  return {
    name,
    email,
    password,
    confirmPassword,
    isFetching
  };
}

export default connect(mapStateToProps)(SignupPage);
