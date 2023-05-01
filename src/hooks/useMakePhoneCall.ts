import { useCallback } from 'react';
import { Linking } from 'react-native';
import { isAndroid } from '../utils/platformUtils';

const useMakePhoneCall = () => {
  const makePhoneCall = useCallback((phoneNumber: string) => {
    let phone;
    if (isAndroid) {
      phone = `tel:${phoneNumber}`;
    } else {
      phone = `telprompt:${phoneNumber}`;
    }
    Linking.openURL(phone).catch(err =>
      console.error('An error occurred', err),
    );
  }, []);

  return makePhoneCall;
};

export default useMakePhoneCall;
