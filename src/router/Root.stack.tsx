import React from 'react';
import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native';
import { AppStackRouter } from './App.stack';

const navigationRef = createNavigationContainerRef();

export const Navigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <AppStackRouter />
    </NavigationContainer>
  );
};
