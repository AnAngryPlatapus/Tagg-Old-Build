
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

//import PictureScroller from './PictureScroller';
//import TaggButton from './TaggButton';
import styles from './styles';

import PropTypes from 'prop-types';


const Profile = (props) => {



  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.featureImage}>
        <Image source={props.pictures} />
        <Text>Go fuck yourself</Text>
      </TouchableOpacity>
    </View>
  );
}

Profile.PropTypes = {
  pictures: PropTypes.object,
  name: PropTypes.string,
  bio: PropTypes.string,
  onTaggPress: PropTypes.func,
  onImagePress: PropTypes.func,
  editable: PropTypes.bool,
};

export default Profile;
