import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const TaggButton = ({ text, onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <View style={styles.wrapper}>
      <Text style={styles.text}>{text}</Text>
    </View>
  </TouchableOpacity>
);

TaggButton.PropTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
}

export default TaggButton;
