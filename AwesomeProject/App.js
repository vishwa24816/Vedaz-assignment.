import React, { useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import CallScreen from './CallScreen';
import { ThemeProvider, ThemeContext } from './ThemeContext';
import messaging from '@react-native-firebase/messaging';

const linking = {
  prefixes: ['awesomeproject://'],
  config: {
    screens: {
      Call: 'call',
    },
  },
};

const MainScreen = ({ navigation }) => {
  const { isDarkMode, toggleTheme, colors, missedCalls } = useContext(ThemeContext);

  useEffect(() => {
    async function requestUserPermission() {
      const authStatus = await messaging().requestPermission();
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

      if (enabled) {
        console.log('Authorization status:', authStatus);
        const token = await messaging().getToken();
        console.log('FCM Token:', token);
        // TODO: Send the token to your backend server
      }
    }

    requestUserPermission();
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>Main Screen</Text>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: colors.primary }]}
        onPress={() => navigation.navigate('Call')}
      >
        <Text style={styles.buttonText}>Go to Call Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: colors.primary, marginTop: 20 }]}
        onPress={toggleTheme}
      >
        <Text style={styles.buttonText}>
          Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
        </Text>
      </TouchableOpacity>
      <Text style={[styles.title, { color: colors.text, marginTop: 20 }]}>
        Missed Calls
      </Text>
      <FlatList
        data={missedCalls}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={{ color: colors.text }}>{item.callerName}</Text>
        )}
      />
    </View>
  );
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <ThemeProvider>
      <NavigationContainer linking={linking}>
        <Stack.Navigator>
          <Stack.Screen name="Main" component={MainScreen} />
          <Stack.Screen name="Call" component={CallScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
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

export default App;
