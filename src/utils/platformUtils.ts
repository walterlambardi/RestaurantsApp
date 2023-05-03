import { Platform, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const iPhoneXMeasurements = {
  iPhoneX: {
    height: 812,
    width: 375,
  },
  iPhoneXSMax: {
    height: 896,
    width: 414,
  },
};

const iPhoneXMeasurementCheck = () => {
  const matchingMeasurement = Object.values(iPhoneXMeasurements).find(
    (measurement: { width: number; height: number }) => {
      return measurement.width === width && measurement.height === height;
    },
  );
  return matchingMeasurement !== undefined;
};

export const isiOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';

export const isiPhoneX = isiOS && iPhoneXMeasurementCheck();
