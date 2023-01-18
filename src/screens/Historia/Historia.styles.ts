import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';
import { moderateScale } from '../../utils/scale';

export const styles = StyleSheet.create({
  safeAreaContainer: {
    backgroundColor: colors.white,
    flex: 1,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  innerContainer: {
    paddingHorizontal: moderateScale(20),
    marginTop: moderateScale(24),
  },
  image: {
    width: '100%',
    height: moderateScale(500),
  },
  devotionalTitle: {
    marginBottom: moderateScale(16),
  },
  subtitle: {
    textAlign: 'justify',
  },
});
