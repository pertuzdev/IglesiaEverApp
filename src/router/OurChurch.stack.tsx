import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HistoriaScreen } from '../screens/Historia/Historia.screen';
import { OUR_CHURCH_STACK } from './constants';
import { OurChurchScreen } from '../screens/OurChurch/OurChurch.screen';
import { ConfesionFeScreen } from '../screens/OurChurch/ConfesionFe/ConfesionFe.screen';
import { FamiliaPastoral } from '../screens/OurChurch/FamiliaPastoral/FamiliaPastoral.screen';

export type TOurChurchStackParamsList = {
  [OUR_CHURCH_STACK.OUR_CHURCH]: undefined;
  [OUR_CHURCH_STACK.HISTORIA_SCREEN]: undefined;
  [OUR_CHURCH_STACK.CONFESION_FE]: undefined;
  [OUR_CHURCH_STACK.FAMILIA_PASTORAL]: undefined;
};

const Stack = createNativeStackNavigator<TOurChurchStackParamsList>();

export const OurChurchStack: FC = () => (
  <Stack.Navigator initialRouteName={OUR_CHURCH_STACK.OUR_CHURCH}>
    <Stack.Screen
      options={{ headerShown: false }}
      name={OUR_CHURCH_STACK.OUR_CHURCH}
      component={OurChurchScreen}
    />
    <Stack.Screen
      options={{ headerShown: false }}
      name={OUR_CHURCH_STACK.HISTORIA_SCREEN}
      component={HistoriaScreen}
    />
    <Stack.Screen
      options={{ headerShown: false }}
      name={OUR_CHURCH_STACK.CONFESION_FE}
      component={ConfesionFeScreen}
    />
    <Stack.Screen
      options={{ headerShown: false }}
      name={OUR_CHURCH_STACK.FAMILIA_PASTORAL}
      component={FamiliaPastoral}
    />
  </Stack.Navigator>
);
