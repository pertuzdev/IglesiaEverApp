import { StyleSheet, StatusBar } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  flatListContainer: {
    padding: 16,
    paddingTop: StatusBar.currentHeight || 42,
  },
  image: {
    width: '100%',
    height: '100%',
    ...StyleSheet.absoluteFillObject,
  },
});
