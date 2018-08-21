// @flow
//TODO th

export const LOGIN_ACCOUNT = 'LOGIN_ACCOUNT';
export const LOGIN_ACCOUNT_SUCCESS = 'LOGIN_ACCOUNT_SUCCESS';
export const LOGIN_ACCOUNT_FAILURE = 'LOGIN_ACCOUNT_FAILURE';

export const LOGIN_EMAIL = 'LOGIN_EMAIL';
export const LOGIN_PASSWORD = 'LOGIN_PASSWORD';

export const loginAction = (isFetching: bool) => (
  { type: LOGIN_ACCOUNT, isFetching }
);

export const loginFailureAction = (isFetching: bool, error: string) => (
  { type: LOGIN_ACCOUNT, isFetching, error }
);

export const emailAction = (email: string) => (
  { type: LOGIN_EMAIL, email }
);

export const passwordAction = (password: string) => (
  { type: LOGIN_PASSWORD, password }
);
