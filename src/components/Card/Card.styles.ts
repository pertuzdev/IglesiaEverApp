import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';
import { moderateScale } from '../../utils/scale';

export const CARD_HEIGHT = 100;
export const MARGIN_BOTTOM = 15;

export const styles = StyleSheet.create({
  card: {
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScale(30),
    justifyContent: 'center',
    width: '100%',
    height: CARD_HEIGHT,
    marginBottom: MARGIN_BOTTOM,
    borderRadius: 8,
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
  },
  subtitle: {
    marginTop: moderateScale(6),
  },
});
