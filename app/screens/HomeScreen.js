import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Dimensions,
  Image,
} from 'react-native';

import VideoPlayer from '../components/VideoPlayer';

export default function HomeScreen() {
  return (
    <View>
      <VideoPlayer />
    </View>
  );
}
