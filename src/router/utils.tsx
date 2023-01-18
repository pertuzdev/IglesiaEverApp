import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import EverLogo from '../assets/images/ever_official_image.png';
import { BackArrow } from '../assets/svg';
import { Home, Bible, Church, Book } from '../assets/svg';
import { TAB, HOME_STACK, DEVOTIONALS_STACK, OUR_CHURCH_STACK } from './constants';
import { colors } from '../utils/colors';
import { moderateScale } from '../utils/scale';
import { styles } from './styles';

export const SCREENS_SHOULD_HIDE_TAB_BAR = [
  HOME_STACK.ANNOUNCEMENTS_SCREEN,
  DEVOTIONALS_STACK.DEVOTIONALS_DETAIL,
  OUR_CHURCH_STACK.HISTORIA_SCREEN,
  OUR_CHURCH_STACK.CONFESION_FE,
  OUR_CHURCH_STACK.FAMILIA_PASTORAL,
];

const getTabBarDisplay = (routeName: any) =>
  SCREENS_SHOULD_HIDE_TAB_BAR.includes(routeName) ? 'none' : 'flex';

const getTabBarStyle = (route: any) => {
  const routeName = getFocusedRouteNameFromRoute(route);
  const display = getTabBarDisplay(routeName as string);

  return {
    display,
    position: 'absolute',
    elevation: 0,
    backgroundColor: 'white',
    borderRadius: moderateScale(15),
    paddingBottom: moderateScale(20),
    paddingTop: moderateScale(8),
    height: moderateScale(80),
    // paddingHorizontal: moderateScale(10),
  };
};

export const createTabOptions = (route: any) => ({
  tabBarStyle: getTabBarStyle(route),
});

export const getTabIcon =
  (route: any) =>
  ({ focused }: any) => {
    const tabIconColor = focused ? colors.lightBlue1 : colors.grey3;
    let tabIcon;
    switch (route) {
      case TAB.HOME_SCREEN:
        tabIcon = <Home color={tabIconColor} width={24} height={24} />;
        break;
      case TAB.OUR_CHURCH:
        tabIcon = <Church color={tabIconColor} width={30} height={30} />;
        break;
      case TAB.BIBLE_SCREEN:
        tabIcon = <Bible color={tabIconColor} width={24} height={24} />;
        break;
      case TAB.DEVOCIONALES:
        tabIcon = <Book color={tabIconColor} width={24} height={24} />;
        break;
      default:
        break;
    }
    return tabIcon;
  };

export const screenOptions = (route: any) => {
  return {
    tabBarIcon: getTabIcon(route.name),
    // tabBarBackground: () => <View style={{flex: 1}} />,
    tabBarShowLabel: true,
    headerShown: false,
    tabBarInactiveTintColor: colors.grey3,
    tabBarActiveTintColor: colors.lightBlue1,
  };
};

export const generalHeader = (navigation: any, routeTitle: string) => {
  return {
    headerShown: true,
    headerTransparent: true,
    title: routeTitle,
    headerTintColor: colors.dark,
    headerLeft: () => (
      <TouchableOpacity onPress={navigation.goBack}>
        <BackArrow width={24} height={24} color={colors.dark} />
      </TouchableOpacity>
    ),
    headerRight: () => <Image source={EverLogo} style={styles.headerRightIcon} />,
  };
};
