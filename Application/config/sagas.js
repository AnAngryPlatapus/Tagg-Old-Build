// @flow
//TODO Trash all this shitty spagetti code

import { takeEvery, takeLatest, call, put, select } from 'redux-saga/effects';
import type { IOEffect } from 'redux-saga/effects';

import { NavigationActions } from 'react-navigation';
import { AsyncStorage } from 'react-native';

import {
  CREATE_ACCOUNT,
  CREATE_ACCOUNT_ERROR,
  CREATE_ACCOUNT_SUCCESS,
} from '../actions/signup'

export const sendCreateAcount = (data: Object) => {

  return fetch('http://10.0.2.2:3000/v1/auth/register', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
        body: JSON.stringify(data)
    })
};




const createAccountSaga = function* () {
  try {

    var Name = yield select(state => state.signup.name);
    var Email = yield select(state => state.signup.email);
    var Password = yield select(state => state.signup.password);

    var data = {
      email: Email,
      password: Password,
      name: Name,
    };


    const response = yield call(sendCreateAcount, data);
    const result = yield response.json();
    console.log('your data in saga',result);
    if("errors" in result) {
      yield put({ type: CREATE_ACCOUNT, error: result.errors });
    } else {
        yield put({ type: CREATE_ACCOUNT_SUCCESS });
        /*const authToken = result;
        AsyncStorage.getItem(r)*/
        yield put(NavigationActions.navigate({ routeName: 'ProfilePage' }));
      };
    } catch (error) {
    yield put({ type: CREATE_ACCOUNT_ERROR, error: error.message });
  }
};

import {
  LOGIN_ACCOUNT,
  LOGIN_ACCOUNT_SUCCESS,
  LOGIN_ACCOUNT_FAILURE
} from '../actions/login';

export const sendLogin = (data: Object) => {

  return fetch('http://10.0.2.2:3000/v1/auth/login', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
        body: JSON.stringify(data)
    })
};

const loginSaga = function* () {
  try {

    var Email = yield select(state => state.login.email);
    var Password = yield select(state => state.login.password);

    var data = {
      email: Email,
      password: Password,
    };

    const response = yield call(sendLogin, data);
    const result = yield response.json();
    console.log('your data in saga',result);

    if("errors" in result) {
      yield put({ type: LOGIN_ACCOUNT_FAILURE, error: result.errors });
    } else {
        yield put({ type: LOGIN_ACCOUNT_SUCCESS });
        /*const authToken = result;
        AsyncStorage.getItem(r)*/
        yield put(NavigationActions.navigate({ routeName: 'ProfilePage' }));
      };
    } catch (error) {
    yield put({ type: LOGIN_ACCOUNT_FAILURE, error: error.message });
  }
};




const rootSaga = function* (): Generator<IOEffect, void, any> {
  yield takeEvery(LOGIN_ACCOUNT, loginSaga);
  yield takeEvery(CREATE_ACCOUNT, createAccountSaga);

};

export default rootSaga;
