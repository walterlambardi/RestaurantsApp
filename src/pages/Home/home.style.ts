import { StyleSheet } from 'react-native';
import { colors, metrics, typography } from '../../themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10 * metrics.scaleCoefficient,
    alignContent: 'center',
    backgroundColor: colors.white_light,
  },
  title: {
    ...typography.h1,
    textAlign: 'center',
  },
});
