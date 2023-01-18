import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';
import { moderateScale } from '../../utils/scale';

export const styles = StyleSheet.create({
  flatlistContent: {
    backgroundColor: colors.white,
    paddingHorizontal: moderateScale(20),
    flex: 1,
  },
  safeAreaView: {
    flex: 1,
    backgroundColor: colors.white,
  },
  flatlist: {
    paddingTop: moderateScale(20),
  },
});
