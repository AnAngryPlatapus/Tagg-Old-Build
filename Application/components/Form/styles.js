// @flow

import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';
import { StyleSheet } from 'react-native';


const DEVICE_WIDTH: number = Dimensions.get('window').width;
const DEVICE_HEIGHT: number = Dimensions.get('window').height;


export default EStyleSheet.create({
  container: {
     padding: 20,
     alignItems: 'center',
     justifyContent: 'center'
    },
    input:{
        height: 40,
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginBottom: 10,
        padding: 10,
        width: DEVICE_WIDTH - 50,
        color: '#fff'
    },

    buttonContainer:{
        backgroundColor: '#2980b6',
        paddingVertical: 15,

    },
    buttonText:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700',
        width: DEVICE_WIDTH - 50,
    }
});
