// @flow

type State = {
  +name: string,
  +email: string,
  +password: string,
  +error: string,
  +confirmPassword: string,
  +isFetching: bool,
};

type nameAction = { type: "NAME_VALIDATE", name: string };
type emailAction = { type: "EMAIL_VALIDATE", email: string };
type validateAction = { type: "PASSWORD_VALIDATE", password: string };
type confirmAction = { type: "PASSWORD_CONFIRM", confirmPassword: string };
type createAction = { type: "CREATE_ACCOUNT", isFetching: bool };
type errorAction = { type: "VALIDATE_ERROR", error: string };


type Action =
  nameAction |
  emailAction |
  validateAction |
  confirmAction |
  createAction |
  errorAction;

  import {
    NAME_VALIDATE,
    EMAIL_VALIDATE,
    PASSWORD_VALIDATE,
    PASSWORD_CONFIRM,
    CREATE_ACCOUNT,
    CREATE_ACCOUNT_SUCCESS,
    VALIDATE_ERROR,
    CREATE_ACCOUNT_ERROR,
  } from '../actions/signup';

const initialState = {
  name: '',
  email: 'smille57@villanova.edu',
  password: 'GoFuckYourself1',
  confirmPassword: 'GoFuckYourself1',
  error: '',
  isFetching: false,
};


const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case NAME_VALIDATE:
      return {
        ...state,
        name: action.name,
      };
    case EMAIL_VALIDATE:
      return {
        ...state,
        email: action.email
      };
    case PASSWORD_VALIDATE:
      return {
        ...state,
        password: action.password
      };
    case PASSWORD_CONFIRM:
      return {
        ...state,
        confirmPassword: action.confirmPassword,
      };
    case CREATE_ACCOUNT:
      return {
        ...state,
        isFetching: true,
      };
    case CREATE_ACCOUNT_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    case CREATE_ACCOUNT_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };
    case VALIDATE_ERROR:
      return {
        ...state,
        error: action.error,
      }
    default:
      return state;
  }
};


export default reducer;
