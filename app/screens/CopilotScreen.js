import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  Switch,
} from 'react-native';
import {copilot, walkthroughable, CopilotStep} from 'react-native-copilot';
import Icon from 'react-native-vector-icons/FontAwesome';

const WalkthroughableText = walkthroughable(Text);
const WalkthroughableImage = walkthroughable(Image);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
  },
  profilePhoto: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginVertical: 20,
  },
  middleView: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#2980b9',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tabItem: {
    flex: 1,
    textAlign: 'center',
  },
  activeSwitchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    alignItems: 'center',
    paddingHorizontal: 40,
  },
});

const {width} = Dimensions.get('window');

const CopilotScreen = ({start, copilotEvents}) => {
  const [secondStepActive, setSecondStepActive] = useState(true);

  const handleStepChange = (step) => {
    console.log(`Current step is: ${step.name}`);
  };

  React.useEffect(() => {});

  return (
    <View style={styles.container}>
      <CopilotStep
        text="Hey! This is the first step of the tour!"
        order={1}
        name="openApp">
        <WalkthroughableText style={styles.title}>
          {'Welcome to the demo of\n"React Native Copilot"'}
        </WalkthroughableText>
      </CopilotStep>
      <View style={styles.middleView}>
        <CopilotStep
          active={secondStepActive}
          text="Here goes your profile picture!"
          order={2}
          name="secondText">
          <WalkthroughableImage
            source={{
              uri:
                'https://pbs.twimg.com/profile_images/527584017189982208/l3wwN-l-_400x400.jpeg',
            }}
            style={styles.profilePhoto}
          />
        </CopilotStep>
        <View style={styles.activeSwitchContainer}>
          <Text>Profile photo step activated?</Text>
          <View style={{flexGrow: 1}} />
          <Switch
            onValueChange={(secondStepActive) =>
              setSecondStepActive(secondStepActive)
            }
            value={secondStepActive}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={() => start()}>
          <Text style={styles.buttonText}>START THE TUTORIAL!</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <CopilotStep
          text="Here is an item in the corner of the screen."
          order={3}
          name="thirdText">
          <WalkthroughableText style={styles.tabItem}>
            {/* <Icon name="user" size={40} color="#888" /> */}
          </WalkthroughableText>
        </CopilotStep>

        {/* <Icon name="user" size={40} color="#888" />
        <Icon style={styles.tabItem} name="ios-user" size={40} color="#888" />
        <Icon
          style={styles.tabItem}
          name="ios-navigate-outline"
          size={40}
          color="#888"
        />
        <Icon style={styles.tabItem} name="ios-rainy" size={40} color="#888" /> */}
      </View>
    </View>
  );
};

// CopilotScreen.propTypes = {
//   start: PropTypes.func.isRequired,
//   copilotEvents: PropTypes.shape({
//     on: PropTypes.func.isRequired,
//   }).isRequired,
// };

export default copilot({
  animated: true, // Can be true or false
  overlay: 'svg', // Can be either view or svg
})(CopilotScreen);
