import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AnnouncementsScreen } from '../screens/Announcements/Annoucements.screen';
import { HOME_STACK } from './constants';
import { HomeScreen } from '../screens/Home/Home.screen';
import { generalHeader } from './utils';

export type THomeStackParamsList = {
  [HOME_STACK.HOME_SCREEN]: undefined;
  [HOME_STACK.ANNOUNCEMENTS_SCREEN]: undefined;
};

const Stack = createNativeStackNavigator<THomeStackParamsList>();
const homeOptions = { headerShown: false };

export const HomeScreenStack: FC = () => (
  <Stack.Navigator initialRouteName={HOME_STACK.HOME_SCREEN}>
    <Stack.Screen options={homeOptions} name={HOME_STACK.HOME_SCREEN} component={HomeScreen} />
    <Stack.Screen
      options={({ navigation }) => generalHeader(navigation, 'Anuncios')}
      name={HOME_STACK.ANNOUNCEMENTS_SCREEN}
      component={AnnouncementsScreen}
    />
  </Stack.Navigator>
);
