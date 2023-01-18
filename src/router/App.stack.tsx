import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BibleScreen } from '../screens/Bible/Bible.screen';
import { HomeScreenStack } from './Home.stack';
import { DevotionalsStack } from './Devotionals.stack';
import { OurChurchStack } from './OurChurch.stack';
import { screenOptions, createTabOptions } from './utils';
import { TAB } from './constants';
import { styles } from './styles';

export type TAppStackParamsList = {
  [TAB.HOME_SCREEN]: undefined;
  [TAB.OUR_CHURCH]: undefined;
  [TAB.BIBLE_SCREEN]: undefined;
  [TAB.DEVOCIONALES]: undefined;
};

const Tab = createBottomTabNavigator<TAppStackParamsList>();

export const AppStackRouter = () => (
  <Tab.Navigator
    screenOptions={({ route }): any => screenOptions(route)}
    sceneContainerStyle={styles.screen}
    initialRouteName={TAB.HOME_SCREEN}
  >
    <Tab.Screen
      name={TAB.HOME_SCREEN}
      component={HomeScreenStack}
      options={({ route }): any => createTabOptions(route)}
    />
    <Tab.Screen
      name={TAB.OUR_CHURCH}
      component={OurChurchStack}
      options={({ route }): any => createTabOptions(route)}
    />
    <Tab.Screen name={TAB.BIBLE_SCREEN} component={BibleScreen} />
    <Tab.Screen
      name={TAB.DEVOCIONALES}
      component={DevotionalsStack}
      options={({ route }): any => createTabOptions(route)}
    />
  </Tab.Navigator>
);
