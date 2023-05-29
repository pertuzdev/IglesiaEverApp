import React from 'react';
import { SafeAreaView, FlatList, Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SecondaryCard } from '../../components/SecondaryCard/SecondaryCard';
import { Header } from '../../components/Header/Header';
import { styles } from './OurChurch.styles';
import notifee from '@notifee/react-native';
import messaging from '@react-native-firebase/messaging';

const churchOptions = [
  {
    title: 'Historia',
    navigateTo: 'HistoriaScreen',
  },
  {
    title: 'Confesión de fé de iglesia EVER',
    navigateTo: 'ConfesionFeScreen',
  },
  {
    title: 'Familia pastoral',
    navigateTo: 'FamiliaPastoralScreen',
  },
  {
    title: 'Ministerios',
  },
  {
    title: 'Contáctanos',
  },
];

export const OurChurchScreen = () => {
  async function onDisplayNotification() {
    // Request permissions (required for iOS)
    await notifee.requestPermission();

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    // Display a notification
    await notifee.displayNotification({
      title: 'Notification Title',
      body: 'Main body content of the notification',
      android: {
        channelId,

        // pressAction is needed if you want the notification to open the app when pressed
        pressAction: {
          id: 'default',
        },
      },
    });
  }

  const onMessageReceived = async (message: any) => {
    console.log('entro');

    console.log('message', message);
  };

  messaging().setBackgroundMessageHandler(onMessageReceived);

  const navigation = useNavigation<any>();
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View>
        <Text>AAAAHHHHHHHH</Text>
      </View>

      <Button
        title="Display Notification"
        color="red"
        onPress={() => onDisplayNotification()}
      />
    </SafeAreaView>
  );
};
