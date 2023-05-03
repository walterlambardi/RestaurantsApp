import { StyleSheet } from 'react-native';
import { metrics } from '../../themes';

export default StyleSheet.create({
  map: {
    width: '100%',
    height: 160 * metrics.scaleCoefficient,
    borderRadius: 10 * metrics.scaleCoefficient,
    overflow: 'hidden',
  },
  container: {
    borderRadius: 10 * metrics.scaleCoefficient,
    overflow: 'hidden',
  },
});
