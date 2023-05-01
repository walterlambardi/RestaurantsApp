import { HEADER_HEIGHT } from './restaurantDetail.style';

export const headerHeightProgress = (scrollY: any) =>
  scrollY.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [HEADER_HEIGHT, HEADER_HEIGHT / 1.6],
    extrapolate: 'clamp',
  });

export const titleProgress = (scrollY: any) =>
  scrollY.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [HEADER_HEIGHT / 2, HEADER_HEIGHT / 4],
    extrapolate: 'clamp',
  });

export const imageOverlarOpacity = (scrollY: any) =>
  scrollY.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [0.25, 0.75],
    extrapolate: 'clamp',
  });

export const titleFontSizeProgress = (scrollY: any) =>
  scrollY.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [24, 18],
    extrapolate: 'clamp',
  });

export const subTitleOpacity = (scrollY: any) =>
  scrollY.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });
