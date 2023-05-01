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
  },
  subTitle: {
    color: colors.gray_font,
    fontSize: 12 * metrics.scaleCoefficient,
    lineHeight: 12 * metrics.scaleCoefficient,
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
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    zIndex: 2,
    color: colors.white,
    marginHorizontal: 30 * metrics.scaleCoefficient,
  },
  headerSubTitle: {
    fontSize: 14 * metrics.scaleCoefficient,
    textAlign: 'center',
    zIndex: 2,
    color: colors.gray_light,
    marginHorizontal: 30 * metrics.scaleCoefficient,
  },
  backIconContainer: {
    zIndex: 999,
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
  },
  backIcon: {
    color: colors.dark,
    fontSize: 18 * metrics.scaleCoefficient,
  },
  phoneIconContainer: {
    zIndex: 999,
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
  },
  phoneIcon: {
    color: colors.white,
    fontSize: 22 * metrics.scaleCoefficient,
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
    marginTop: 10 * metrics.scaleCoefficient,
    marginLeft: -6 * metrics.scaleCoefficient,
  },
  rating: {
    fontWeight: '300',
    fontSize: 10 * metrics.scaleCoefficient,
    color: '#A8A8A8',
  },
  titleWithBottomPadding: {
    paddingBottom: 5 * metrics.scaleCoefficient,
  },
});
