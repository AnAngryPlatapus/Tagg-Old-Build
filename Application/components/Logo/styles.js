import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const imageWidth = Dimensions.get('window').width / 2;


export default EStyleSheet.create({

  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: imageWidth,
    height: imageWidth,
    /*borderRadius: 10,
    borderWidth: 10,
    borderColor: '$white',
    padding: 25,*/
  },
  image: {
    padding: 10,
    width: imageWidth,
    tintColor: '$primaryBlue',
  },
  text: {
    fontSize: 52,
    fontWeight: '600',
    letterSpacing: -0.5,
    marginTop: 15,
    color: '$primaryWhite'
  }
});
