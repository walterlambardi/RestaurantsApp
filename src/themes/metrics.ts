import { Dimensions, StatusBar } from 'react-native';
import { isAndroid, isiOS, isiPhoneX } from '../utils/platformUtils';

const { height, width } = Dimensions.get('window');

const HORIZONTAL_PAGE_PADDING_PERCENTAGE = 8;
const HORIZONTAL_SIZE_PERCENTAGE = 16;
const HORIZONTAL_PADDING_PERCENTAGE = 8;

const getHorizontalValue = (percentage: number) =>
  Math.round(width * (percentage / 100));

const horizontal = {
  pagePadding: getHorizontalValue(HORIZONTAL_PAGE_PADDING_PERCENTAGE),
  size: getHorizontalValue(HORIZONTAL_SIZE_PERCENTAGE),
  padding: getHorizontalValue(HORIZONTAL_PADDING_PERCENTAGE),
  spacing: getHorizontalValue(
    HORIZONTAL_SIZE_PERCENTAGE + HORIZONTAL_PADDING_PERCENTAGE,
  ),
};
const horizontalScaleFactor = width / 1080;
const verticalScaleFactor = height / 2220;

const dw = 375;
const scaleCoefficient = width / dw;

const scale = (val: number) => val * horizontalScaleFactor;
const scaleY = (val: number) => val * verticalScaleFactor;

const VERTICAL_STEP = scaleY(42);
const getVerticalValue = (number: number) => number * VERTICAL_STEP;

export const getStatusBarHeight = () => {
  if (isiOS) {
    return isiPhoneX ? 44 : 20;
  }
  return StatusBar.currentHeight || 0;
};

const topPadding = isiPhoneX ? 40 : getStatusBarHeight();
const bottomPadding = isiPhoneX ? 25 : 0;

const tabBarHeight: number = 100 * scaleCoefficient + (isiPhoneX ? 20 : 10);
const eventTabsHeight: number = 60 * scaleCoefficient;

const vertical = {
  spacing: {
    xxs: getVerticalValue(0.25),
    xs: getVerticalValue(0.5),
    s: getVerticalValue(1),
    m: getVerticalValue(2),
    l: getVerticalValue(3),
    xl: getVerticalValue(4),
  },
};

const icon = {
  s: scale(50),
  m: scale(70),
  l: scale(90),
};

export default {
  screenHeight: height,
  screenWidth: width,
  scaleCoefficient,
  horizontal,
  vertical,
  scale,
  scaleY,
  topPadding,
  bottomPadding,
  tabBarHeight,
  eventTabsHeight,
  icon,
  getStatusBarHeight,
  modalTopPadding: isAndroid ? 0 : getStatusBarHeight() + 32 * scaleCoefficient,
  heightWithoutStatusBar: height - getStatusBarHeight(),
};
