import { Animated } from 'react-native';
import { HEADER_HEIGHT } from './restaurantDetail.style';

export const headerHeightProgress = (scrollY: Animated.Value) =>
  scrollY.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [HEADER_HEIGHT, HEADER_HEIGHT / 1.6],
    extrapolate: 'clamp',
  });

export const titleOpacity = (scrollY: Animated.Value) =>
  scrollY.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

export const imageOverlarOpacity = (scrollY: Animated.Value) =>
  scrollY.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [0.25, 0.8],
    extrapolate: 'clamp',
  });
