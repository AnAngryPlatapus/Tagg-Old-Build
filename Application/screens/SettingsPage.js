import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet'
import { Container } from '../components/Container';

const styles = EStyleSheet.create({
  override: {
    backgroundColor: '$primaryWhite',
  }
});

class SettingsPage extends Component {

  render() {
    return(
      <Container backgroundColor={styles.override}>
        <View>
          <Text>Here we go boiz</Text>
        </View>
      </Container>
    );
  }
}

export default SettingsPage;
