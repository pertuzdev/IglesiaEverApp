import { StyleSheet, StatusBar } from 'react-native';
import { colors } from '../../utils/colors';
import { moderateScale } from '../../utils/scale';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  flatListContainer: {
    paddingHorizontal: moderateScale(16),
    paddingBottom: moderateScale(80),
    paddingTop: StatusBar.currentHeight || moderateScale(42),
  },
  image: {
    width: '100%',
    height: '100%',
    ...StyleSheet.absoluteFillObject,
  },
  safeAreaContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
