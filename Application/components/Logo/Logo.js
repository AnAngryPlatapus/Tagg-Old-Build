import React from 'react';
import {
  View,
  Image,
  Text,
} from 'react-native';

import styles from './styles';

const Logo = () => (
  <View style={styles.container}>
    <View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require('./images/logo.png')}
      />
      <Text style={styles.text}>Tagg</Text>

    </View>
  </View>
);

export default Logo;
