// @flow

type State = {
  +email: string,
  +password: string,
  +error: string,
  +isFetching: bool,
};

type emailAction = { type: "LOGIN_EMAIL", email: string };
type passwordAction = { type: "LOGIN_PASSWORD", password: string };
type loginFailureAction = { type: "LOGIN_ACCOUNT_FAILURE", isFetching: bool, error: string };
type loginAction = { type: "LOGIN_ACCOUNT", isFetching: bool };


type Action =
  emailAction |
  passwordAction |
  loginFailureAction |
  loginAction;

  import {
    LOGIN_ACCOUNT,
    LOGIN_ACCOUNT_SUCCESS,
    LOGIN_ACCOUNT_FAILURE,
    LOGIN_EMAIL,
    LOGIN_PASSWORD,
  } from '../actions/login';

const initialState = {
  email: '',
  password: '',
  error: '',
  isFetching: false,
};


const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case LOGIN_EMAIL:
      return {
        ...state,
        email: action.email,
      };
    case LOGIN_PASSWORD:
      return {
        ...state,
        password: action.password,
      };
    case LOGIN_ACCOUNT:
      return {
        ...state,
        isFetching: true,
      };
    case LOGIN_ACCOUNT_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };
    case LOGIN_ACCOUNT_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
};


export default reducer;
