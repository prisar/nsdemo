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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const {width} = Dimensions.get('window');

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 42}}>Welcome to Login</Text>
      <Image
        style={{height: 300, width: width}}
        source={{
          uri: 'https://miro.medium.com/max/620/1*dqKkovjxi4IPxVJzdi8DFA.png',
        }}></Image>
      <TextInput
        style={{borderWidth: 1, width: width * 0.8, marginTop: 20}}
        placeholder="username"></TextInput>
      <TextInput
        style={{borderWidth: 1, width: width * 0.8, marginTop: 20}}
        placeholder="password"></TextInput>
      <Button style={{marginTop: 20}} title="Login"></Button>
    </View>
  );
}
