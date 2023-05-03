import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../themes';
import { isAndroid } from '../../utils/platformUtils';

export const HEADER_HEIGHT = 260 * metrics.scaleCoefficient;

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    backgroundColor: colors.white_light,
    marginTop: -32 * metrics.scaleCoefficient,
    borderTopLeftRadius: 32 * metrics.scaleCoefficient,
    borderTopRightRadius: 32 * metrics.scaleCoefficient,
    padding: 20 * metrics.scaleCoefficient,
  },
  title: {
    fontWeight: '700',
    fontSize: 22 * metrics.scaleCoefficient,
    lineHeight: 24 * metrics.scaleCoefficient,
    marginTop: 5 * metrics.scaleCoefficient,
  },
  divider: {
    marginVertical: 20 * metrics.scaleCoefficient,
  },
  spaceXL: {
    height: 40 * metrics.scaleCoefficient,
  },
  spaceM: {
    height: 20 * metrics.scaleCoefficient,
  },
  spaceS: {
    height: 10 * metrics.scaleCoefficient,
  },
  header: {
    overflow: 'hidden',
  },
  headerBackground: {
    ...StyleSheet.absoluteFillObject,
    height: HEADER_HEIGHT,
    width: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  headerTitle: {
    position: 'absolute',
    top: HEADER_HEIGHT / 4,
    left: metrics.screenWidth / 4,
    right: metrics.screenWidth / 4,
    alignContent: 'center',
    fontSize: 16 * metrics.scaleCoefficient,
    fontWeight: 'bold',
    textAlign: 'center',
    zIndex: 3,
    color: colors.white_light,
  },
  backIconContainer: {
    zIndex: 9,
    position: 'absolute',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    top: isAndroid
      ? 54 * metrics.scaleCoefficient
      : 52 * metrics.scaleCoefficient,
    left: 20 * metrics.scaleCoefficient,
    width: 42 * metrics.scaleCoefficient,
    height: 42 * metrics.scaleCoefficient,
    backgroundColor: colors.white_light,
    borderRadius: 14 * metrics.scaleCoefficient,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 5,
  },
  backIcon: {
    color: colors.dark,
    fontSize: 32 * metrics.scaleCoefficient,
  },
  rightIconContainer: {
    zIndex: 9,
    position: 'absolute',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    top: isAndroid
      ? 54 * metrics.scaleCoefficient
      : 52 * metrics.scaleCoefficient,
    right: 20 * metrics.scaleCoefficient,
    width: 42 * metrics.scaleCoefficient,
    height: 42 * metrics.scaleCoefficient,
    backgroundColor: '#503E9D',
    borderRadius: 14 * metrics.scaleCoefficient,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 5,
  },
  rightIcon: {
    color: colors.white,
    fontSize: 24 * metrics.scaleCoefficient,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: colors.black,
    opacity: 1,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 5 * metrics.scaleCoefficient,
  },
  rating: {
    fontSize: 12 * metrics.scaleCoefficient,
    color: 'gray',
  },
  titleWithBottomPadding: {
    paddingBottom: 5 * metrics.scaleCoefficient,
  },
  addressChip: {
    backgroundColor: colors.gray_super_light,
    color: colors.white,
    minHeight: 34 * metrics.scaleCoefficient,
  },
});
