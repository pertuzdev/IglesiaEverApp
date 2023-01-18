import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';
import { moderateScale } from '../../utils/scale';

export const MARGIN_BOTTOM = 15;

export const styles = StyleSheet.create({
  card: {
    paddingHorizontal: moderateScale(12),
    paddingVertical: moderateScale(8),
    justifyContent: 'center',
    width: '100%',
    marginBottom: MARGIN_BOTTOM,
    borderRadius: 8,
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.19,
    shadowRadius: 10.3,

    elevation: 13,
  },
  thumbnail: {
    width: moderateScale(60),
    height: moderateScale(60),
    borderRadius: moderateScale(100) / 2,
    marginRight: moderateScale(12),
  },
  image: {
    width: '100%',
    height: moderateScale(400),
  },
  bottomContainer: {
    marginTop: moderateScale(10),
  },
  title: {
    marginBottom: moderateScale(8),
  },
});
