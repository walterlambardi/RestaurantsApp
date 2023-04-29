import { StyleSheet } from 'react-native';
import { colors, metrics, typography } from '../../themes';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  pageTitle: {
    ...typography.h1,
    fontWeight: '700',
  },
  bgColor: {
    backgroundColor: colors.white,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.divider,
  },
  searchBar: {
    marginHorizontal: 15 * metrics.scaleCoefficient,
    marginVertical: 10 * metrics.scaleCoefficient,
  },
  surface: {
    borderRadius: 0 * metrics.scaleCoefficient,
    marginVertical: 10 * metrics.scaleCoefficient,
    marginHorizontal: 15 * metrics.scaleCoefficient,
  },
  card: {
    backgroundColor: colors.gray_light,
  },
  listContainer: {
    paddingBottom: 10 * metrics.scaleCoefficient,
  },
  animationsContainers: {
    position: 'absolute',
    top: metrics.screenHeight / 4,
    width: '100%',
    height: 300 * metrics.scaleCoefficient,
  },
  cardTitleStyle: {
    ...typography.h2,
    fontWeight: '600',
  },
  cardSubTitleStyle: {
    ...typography.h3,
  },
});
