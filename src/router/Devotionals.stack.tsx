import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { DevotionalsScreen } from '../screens/Devotionals/Devotionals.screen';
import { DevotionalsDetail } from '../screens/Devotionals/DevotionalsDetail/DevotionalsDetail.screen';
import { DEVOTIONALS_STACK } from './constants';

export type TDevotionalsStackParamsList = {
  [DEVOTIONALS_STACK.DEVOTIONALS_SCREEN]: undefined;
  [DEVOTIONALS_STACK.DEVOTIONALS_DETAIL]: {
    title: string;
    subtitle: string;
    image: string;
  };
};

const Stack = createNativeStackNavigator<TDevotionalsStackParamsList>();

export const DevotionalsStack: FC = () => (
  <Stack.Navigator initialRouteName={DEVOTIONALS_STACK.DEVOTIONALS_SCREEN}>
    <Stack.Screen
      options={{ headerShown: false }}
      name={DEVOTIONALS_STACK.DEVOTIONALS_SCREEN}
      component={DevotionalsScreen}
    />
    <Stack.Screen
      options={{ headerShown: false }}
      name={DEVOTIONALS_STACK.DEVOTIONALS_DETAIL}
      component={DevotionalsDetail}
    />
  </Stack.Navigator>
);
