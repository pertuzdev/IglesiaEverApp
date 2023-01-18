import { StyleSheet } from 'react-native';
import { moderateScale } from '../../utils/scale';

export const styles = StyleSheet.create({
  h1: {
    fontFamily: 'Roboto-Regular',
    fontSize: moderateScale(36),
  },
  h2: {
    fontFamily: 'Roboto-Regular',
    fontSize: moderateScale(24),
  },
  h3: {
    fontFamily: 'Roboto-Regular',
    fontSize: moderateScale(16),
    lineHeight: moderateScale(24),
  },
  p: {
    fontFamily: 'Roboto-Regular',
    fontSize: moderateScale(12),
  },
  h1Bold: {
    fontFamily: 'Roboto-Bold',
    fontSize: moderateScale(36),
  },
  h2Bold: {
    fontFamily: 'Roboto-Bold',
    fontSize: moderateScale(24),
  },
  h3Bold: {
    fontFamily: 'Roboto-Bold',
    fontSize: moderateScale(16),
  },
  pBold: {
    fontFamily: 'Roboto-Bold',
    fontSize: moderateScale(12),
  },
});
