/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect } from 'react';
import { Navigator } from './src/router/Root.stack';
import messaging from '@react-native-firebase/messaging';

const App = () => {
  useEffect(() => {
    // Subscribe to a topic
    const subscribeToTopic = async (topicName: any) => {
      try {
        await messaging().subscribeToTopic(topicName);
        console.log(`Subscribed to topic: ${topicName}`);
      } catch (error) {
        console.error(`Error subscribing to topic: ${error}`);
      }
    };

    // Call the function to subscribe to a topic
    subscribeToTopic('allDevices-1501');

    // Handle background notifications
    messaging().setBackgroundMessageHandler(async (remoteMessage) => {
      console.log('Background notification:', remoteMessage);
      // Handle the received notification in the background
    });

    // Handle foreground notifications
    messaging().onMessage((remoteMessage) => {
      console.log('Foreground notification:', remoteMessage);
      // Handle the received notification in the foreground
    });
  }, []);
  return <Navigator />;
};

export default App;
