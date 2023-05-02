import React from 'react';
import { View } from 'react-native';
import Lottie, { AnimatedLottieViewProps } from 'lottie-react-native';
import styles from './lottieView.style';

const LottieView = (
  props: JSX.IntrinsicAttributes &
    JSX.IntrinsicClassAttributes<Lottie> &
    Readonly<AnimatedLottieViewProps>,
) => (
  <View style={styles.animationsContainers}>
    <Lottie {...props} />
  </View>
);

export default LottieView;
