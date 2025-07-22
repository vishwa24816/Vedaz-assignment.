import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ThemeContext } from './ThemeContext';

const CallScreen = ({ navigation }) => {
  const { colors, addMissedCall } = useContext(ThemeContext);

  const handleDecline = () => {
    addMissedCall({ callerName: 'John Doe' });
    navigation.goBack();
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.secondary }]}>
      <View style={styles.header}>
        <Text style={[styles.callerName, { color: colors.text }]}>
          John Doe
        </Text>
        <Text style={[styles.callStatus, { color: colors.text }]}>
          Calling...
        </Text>
      </View>
      <View style={styles.profileImageContainer}>
        <Image
          source={{ uri: 'https://www.w3schools.com/howto/img_avatar.png' }}
          style={styles.profileImage}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#ff3b30' }]}
          onPress={handleDecline}
        >
          <Text style={styles.buttonText}>Decline</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: colors.primary }]}
        >
          <Text style={styles.buttonText}>Accept</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  header: {
    alignItems: 'center',
  },
  callerName: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  callStatus: {
    fontSize: 18,
  },
  profileImageContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CallScreen;
