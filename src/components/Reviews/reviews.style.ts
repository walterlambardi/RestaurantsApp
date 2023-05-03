import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../themes';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  reviewerImage: {
    width: 55 * metrics.scaleCoefficient,
    height: 55 * metrics.scaleCoefficient,
    marginRight: 15 * metrics.scaleCoefficient,
  },
  reviewContainer: {
    flexDirection: 'row',
    marginVertical: 15 * metrics.scaleCoefficient,
  },
  reviewAuthor: {
    fontWeight: '300',
    color: colors.black,
  },
  reviewDate: {
    fontWeight: '600',
    color: colors.gray_font,
    fontSize: 10 * metrics.scaleCoefficient,
  },
  reviewText: {
    color: colors.gray_light_font,
    fontSize: 12 * metrics.scaleCoefficient,
    lineHeight: 13 * metrics.scaleCoefficient,
    marginTop: 8 * metrics.scaleCoefficient,
    letterSpacing: 0,
  },
  reviewsDivider: {
    marginVertical: 10 * metrics.scaleCoefficient,
  },
  divider: {
    marginTop: 10 * metrics.scaleCoefficient,
  },
  rating: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'center',
    alignItems: 'baseline',
  },
});
