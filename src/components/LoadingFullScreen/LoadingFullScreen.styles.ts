import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';
import { moderateScale } from '../../utils/scale';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottieContainer: {
    width: moderateScale(100),
    height: moderateScale(100),
  },
});
