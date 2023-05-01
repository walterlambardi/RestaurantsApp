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
    marginTop: 2 * metrics.scaleCoefficient,
    fontSize: 10 * metrics.scaleCoefficient,
  },
  reviewText: {
    fontWeight: '300',
    color: colors.gray_font,
    marginTop: 8 * metrics.scaleCoefficient,
    fontSize: 12 * metrics.scaleCoefficient,
  },
  reviewsDivider: {
    marginVertical: 10 * metrics.scaleCoefficient,
  },
});
