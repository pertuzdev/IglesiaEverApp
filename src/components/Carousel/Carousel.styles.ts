import { StyleSheet, Dimensions } from 'react-native';
import { moderateScale } from '../../utils/scale';

const { width, height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  contentContainer: {
    width: width,
    height: height,
    position: 'relative',
  },
  imageContainer: {
    width: width,
    height: height,
  },
  typography: {
    fontSize: moderateScale(60),
    marginLeft: moderateScale(24),
  },
  typographyContainer: {
    position: 'absolute',
    zIndex: 2,
    backgroundColor: 'rgba(0,0,0,0.6)',
    width: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
    zIndex: 1,
  },
});
