import { StyleSheet } from 'react-native';
import { colors, metrics, typography } from '../../themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white_light,
  },
  pageTitle: {
    ...typography.h1,
    fontWeight: '700',
  },
  appBarHeader: {
    backgroundColor: colors.white_light,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.divider,
  },
  surface: {
    borderRadius: 0 * metrics.scaleCoefficient,
    marginVertical: 10 * metrics.scaleCoefficient,
    marginHorizontal: 15 * metrics.scaleCoefficient,
  },
  card: {
    backgroundColor: colors.white_light,
  },
  listContainer: {
    paddingBottom: 10 * metrics.scaleCoefficient,
  },
  cardTitleStyle: {
    ...typography.h2,
    fontWeight: '600',
    marginTop: 10 * metrics.scaleCoefficient,
  },
  cardSubTitleStyle: {},
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5 * metrics.scaleCoefficient,
    marginBottom: 14 * metrics.scaleCoefficient,
  },
  rightIconContainer: {
    zIndex: 9,
    position: 'absolute',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    top: 15 * metrics.scaleCoefficient,
    right: 15 * metrics.scaleCoefficient,
    width: 38 * metrics.scaleCoefficient,
    height: 38 * metrics.scaleCoefficient,
    backgroundColor: colors.transparent_light,
    borderRadius: 14 * metrics.scaleCoefficient,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 5,
  },
  rightIcon: {
    fontSize: 18 * metrics.scaleCoefficient,
    backgroundColor: colors.transparent,
  },
});
