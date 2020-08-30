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
import Video from 'react-native-video';

const {width} = Dimensions.get('window');

export default function VideoPlayer() {
  return (
    <View>
      <Text>Video</Text>
      <Video
        style={{width: width, height: 500}}
        resizeMode="cover"
        source={{
          uri:
            'https://assets.mixkit.co/videos/download/mixkit-stars-in-space-1610.mp4',
        }}
        onError={() => {console.log(err)}}
       paused={false}
       muted={false}
       repeat
      />
    </View>
  );
}
