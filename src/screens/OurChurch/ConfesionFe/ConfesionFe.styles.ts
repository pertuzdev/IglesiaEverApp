import { StyleSheet } from 'react-native';
import { colors } from '../../../utils/colors';
import { moderateScale } from '../../../utils/scale';

export const styles = StyleSheet.create({
  box: {
    height: 70,
    backgroundColor: '#F7ECDE',
    width: '100%',
    alignItems: 'center',
    paddingTop: moderateScale(20),
    paddingHorizontal: moderateScale(20),
  },
  safeAreaContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
