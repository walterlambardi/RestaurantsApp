import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../themes';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchbar: {
    flex: 1,
    backgroundColor: colors.white_light,
    borderRadius: 12 * metrics.scaleCoefficient,
  },
  locationIcon: {
    position: 'absolute',
    right: 0,
  },
});
