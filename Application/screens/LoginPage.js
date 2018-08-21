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
import { Login } from '../components/Form';

import {
  emailAction,
  passwordAction,
  loginAction,
} from '../actions/login';

type Props = {
  dispatch: Function,
  email: string,
  password: string,
}

class LoginPage extends Component<Props> {
  props: Props;

  handleLogin = (isFetching: bool) => {
    this.props.dispatch(loginAction(isFetching));
  };

  handleEmailChange = (email: string) => {
    this.props.dispatch(emailAction(email));
  };

  handlePasswordChange = (password: string) => {
    this.props.dispatch(passwordAction(password));
  };


  render() {
    return (
      <Container>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <Logo />
        <KeyboardAvoidingView behavior="padding">
          <Login
            onEmailChange={this.handleEmailChange}
            onPasswordChange={this.handlePasswordChange}
            onLogin={this.handleLogin}
          />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {

  const email = state.login.email;
  const password = state.login.password;

  const isFetching = state.login.isFetching;

  return {
    email,
    password,
    isFetching
  };
}

export default connect(mapStateToProps)(LoginPage);
