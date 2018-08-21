// @flow

import { StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
// Launch stack
import Launch from '../screens/Launch';
import LoginPage from '../screens/LoginPage';
import SignupPage from '../screens/SignupPage';
// Home stack
import ProfilePage from '../screens/ProfilePage';

const LaunchStack = StackNavigator({
  Launch: {
    screen: Launch,
    navigationOptions: {
       header: () => null,
       headerTitle: 'Home',
     },
  },
  LoginPage: {
    screen: LoginPage,
    navigationOptions: {
       headerTitle: 'Login',
       headerStyle: { backgroundColor: '#0f77c5'},
     },
   },
   SignupPage: {
     screen: SignupPage,
     navigationOptions: {
        headerTitle: 'Signup',
        headerStyle: { backgroundColor: '#0f77c5'},
      },
    },
}, {
  headerMode: 'screen',
});

const HomeStack = StackNavigator({
  ProfilePage: {
    screen: ProfilePage,
    navigationOptions: {
       header: () => null,
       headerTitle: 'Profile',
     },
  },/*
  LoginPage: {
    screen: LoginPage,
    navigationOptions: {
       headerTitle: 'Login',
       headerStyle: { backgroundColor: '#0f77c5'},
     },
   },*/
});

export default StackNavigator({
  Home: {
    screen: LaunchStack,
  },
  Tagg: {
    screen: HomeStack,
  },
}, {
  mode: 'modal',
  headerMode: 'none',
  cardStyle: { paddingTop: StatusBar.currentHeight },
});
