import { StyleSheet } from 'react-native';
import { colors, metrics, typography } from '../../themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    backgroundColor: colors.white_light,
  },
  cardContainer: {
    flexDirection: 'row',
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottieAnimation: {
    width: 200 * metrics.scaleCoefficient,
    marginTop: 40 * metrics.scaleCoefficient,
  },
  image: {
    width: 80 * metrics.scaleCoefficient,
    height: 80 * metrics.scaleCoefficient,
    borderRadius: 40 * metrics.scaleCoefficient,
    margin: 10 * metrics.scaleCoefficient,
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
