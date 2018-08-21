// @flow

import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paddingRight: {
    paddingRight: 20,
  },
  paddingLeft: {
    paddingLeft: 20,
  },
  button: {
    backgroundColor: '$primaryBlue',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
    padding: 20,
    borderRadius: 7,
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 32,
    color: '$primaryWhite',
  },

});
