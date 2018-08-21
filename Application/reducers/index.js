// @flow

import { combineReducers } from 'redux';

import signup from './signup';
import login from './login';

import nav from './nav';

export default combineReducers({
  signup,
  login,
  nav,
});
