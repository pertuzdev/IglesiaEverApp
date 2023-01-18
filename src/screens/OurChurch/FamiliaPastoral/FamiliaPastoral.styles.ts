import { StyleSheet } from 'react-native';
import { colors } from '../../../utils/colors';
import { moderateScale } from '../../../utils/scale';

export const styles = StyleSheet.create({
  innerContent: {
    paddingHorizontal: moderateScale(20),
    flex: 1,
  },
  safeAreaView: {
    flex: 1,
    backgroundColor: colors.white,
  },
  title: {
    marginBottom: moderateScale(10),
  },
});
