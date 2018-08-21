// @flow

//TODO add the validation logic


export const NAME_VALIDATE = "NAME_VALIDATE";
export const EMAIL_VALIDATE = "EMAIL_VALIDATE";
export const PASSWORD_VALIDATE = "PASSWORD_VALIDATE";
export const PASSWORD_CONFIRM = "PASSWORD_CONFIRM";

export const CREATE_ACCOUNT = "CREATE_ACCOUNT";

export const CREATE_ACCOUNT_SUCCESS = 'CREATE_ACCOUNT_SUCCESS';
export const CREATE_ACCOUNT_ERROR = 'CREATE_ACCOUNT_ERROR';

export const VALIDATE_ERROR = 'VALIDATE_ERROR';



export const nameValidate = (name: string) => (
  { type: NAME_VALIDATE, name }
);

export const  emailValidate = (email: string) => (
  { type: EMAIL_VALIDATE, email }
);

export const  passwordValidate = (password: string) => (
  { type: PASSWORD_VALIDATE, password }
);

export const  passwordConfirm = (confirmPassword: string) => ({
  type: PASSWORD_CONFIRM,
  confirmPassword,
});

export const  createAccount = (isFetching: bool) => ({
  type: CREATE_ACCOUNT, isFetching
});

export const validateError = (error: string) =>({
  type: VALIDATE_ERROR,
  error,
});
