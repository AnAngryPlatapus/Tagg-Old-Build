// @flow

import { NavigationActions } from 'react-navigation';
import Navigator from '../config/routes';

const initialState = Navigator.router.getStateForAction(NavigationActions.init())


export default (state: Object = initialState, action: Function) => {
  const nextState = Navigator.router.getStateForAction(action, state);
  return nextState || state;
};
