import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    backgroundColor: colors.white,
    paddingHorizontal: 15 * metrics.scaleCoefficient,
  },
  surface: {
    flex: 1,
    marginHorizontal: 1 * metrics.scaleCoefficient,
    backgroundColor: colors.white,
    borderRadius: 5 * metrics.scaleCoefficient,
    marginVertical: 10 * metrics.scaleCoefficient,
  },
  listContainer: {
    paddingVertical: 10 * metrics.scaleCoefficient,
  },
});
