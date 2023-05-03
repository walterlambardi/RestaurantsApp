import { StyleSheet } from 'react-native';
import { metrics } from '../../themes';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  filledStar: {
    color: 'gold',
    fontSize: 20 * metrics.scaleCoefficient,
    marginRight: 4 * metrics.scaleCoefficient,
  },
  emptyStar: {
    color: 'lightgray',
    fontSize: 20 * metrics.scaleCoefficient,
    marginRight: 4 * metrics.scaleCoefficient,
  },
});
