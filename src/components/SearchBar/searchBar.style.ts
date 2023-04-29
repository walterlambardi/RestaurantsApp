import { StyleSheet } from 'react-native';
import { colors } from '../../themes';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: colors.white,
  },
  locationIcon: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
});
