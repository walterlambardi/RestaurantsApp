import { StyleSheet } from 'react-native';
import { metrics } from '../../themes';

export default StyleSheet.create({
  animationsContainers: {
    position: 'absolute',
    top: metrics.screenHeight / 4,
    width: '100%',
    height: 300 * metrics.scaleCoefficient,
  },
});
