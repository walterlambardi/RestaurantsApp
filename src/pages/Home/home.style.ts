import { StyleSheet } from 'react-native';
import { colors, metrics, typography } from '../../themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white_light,
  },
  bgColor: {
    backgroundColor: colors.white_light,
  },
  searchBar: {
    marginHorizontal: 15 * metrics.scaleCoefficient,
  },
  surface: {
    borderRadius: 5 * metrics.scaleCoefficient,
    marginVertical: 10 * metrics.scaleCoefficient,
    marginHorizontal: 15 * metrics.scaleCoefficient,
  },
  listContainer: {
    paddingVertical: 10 * metrics.scaleCoefficient,
  },
  animationsContainers: {
    position: 'absolute',
    top: metrics.screenHeight / 3,
    left: 100 * metrics.scaleCoefficient,
    width: 200 * metrics.scaleCoefficient,
    height: 200 * metrics.scaleCoefficient,
  },
  cardTitle: {
    flex: 1,
  },
  cardTitleStyle: {
    ...typography.h2,
    fontWeight: '600',
  },
  cardSubTitleStyle: {
    ...typography.h3,
  },
});
