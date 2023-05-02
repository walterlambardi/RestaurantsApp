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
  },
  cardSubTitleStyle: {
    ...typography.h3,
  },
});
