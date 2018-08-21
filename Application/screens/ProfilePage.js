import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
} from 'react-native';

import { AppContainer } from '../components/Container';
import { Profile } from '../components/Profile';

import MockProfileApi from '../data/ProfileApi';

class ProfilePage extends Component {


  handlePicturePress = () => {
    console.log("TODO Change feature image");
  }

  handleTaggPress = () => {
    console.log("TODO dispatch tagg request");
  }

  render() {
    return(
      <AppContainer>
        <StatusBar barStyle="default" translucent={false} />
        <Profile
          pictures={MockProfileApi.pics[0]}
        />

      </AppContainer>
    );
  }
}

export default ProfilePage;
