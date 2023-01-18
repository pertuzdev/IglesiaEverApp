import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';
import { moderateScale } from '../../utils/scale';

export const CARD_HEIGHT = 60;
export const MARGIN_BOTTOM = 15;

export const styles = StyleSheet.create({
  card: {
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScale(8),
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
    shadowOpacity: 0.19,
    shadowRadius: 10.3,

    elevation: 13,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  subtitle: {
    marginTop: moderateScale(6),
  },
});
