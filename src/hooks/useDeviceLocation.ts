import { useEffect, useState } from 'react';
import { PermissionStatus, PermissionsAndroid } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { LatLngLiteral } from '../types/LocationTypes';
import { isAndroid, isiOS } from '../utils/platformUtils';

interface IDeviceLocationHook {
  permissionStatus: PermissionStatus | 'disabled' | 'restricted' | null;
  requestPermission: () => Promise<void>;
  deviceLocation: LatLngLiteral | null;
  requestLocation: () => void;
}

const useDeviceLocation = (): IDeviceLocationHook => {
  const [deviceLocation, setDeviceLocation] = useState<LatLngLiteral | null>(
    null,
  );
  const [permissionStatus, setPermissionStatus] = useState<
    PermissionStatus | 'disabled' | 'restricted' | null
  >(null);

  useEffect(() => {
    const checkPermissionStatus = async () => {
      if (isAndroid) {
        const granted = await PermissionsAndroid.check(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
        setPermissionStatus(granted ? 'granted' : 'denied');
      } else if (isiOS) {
        const status = await Geolocation.requestAuthorization('whenInUse');
        setPermissionStatus(status);
      }
    };

    checkPermissionStatus();
  }, []);

  const requestPermission = async () => {
    if (isAndroid) {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      setPermissionStatus(
        granted === PermissionsAndroid.RESULTS.GRANTED ? 'granted' : 'denied',
      );
    } else if (isiOS) {
      const status = await Geolocation.requestAuthorization('whenInUse');
      setPermissionStatus(status);
    }
  };

  const requestLocation = async () => {
    if (permissionStatus === 'granted') {
      Geolocation.getCurrentPosition(position => {
        setDeviceLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      }, console.error);
    }
  };

  return {
    permissionStatus,
    requestPermission,
    deviceLocation,
    requestLocation,
  };
};

export default useDeviceLocation;
