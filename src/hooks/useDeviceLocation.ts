import { useEffect, useState } from 'react';
import { PermissionStatus, PermissionsAndroid } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { LatLngLiteral } from '../types/LocationTypes';
import { isAndroid, isiOS } from '../utils/platformUtils';
import Geocoder from 'react-native-geocoding';

interface IDeviceLocationHook {
  permissionStatus: PermissionStatus | 'disabled' | 'restricted' | null;
  requestPermission: () => Promise<void>;
  deviceLocation: LatLngLiteral | null;
  requestLocation: () => void;
  requestLocationAddress: () => void;
  deviceLocationAddress: string;
}

const useDeviceLocation = (): IDeviceLocationHook => {
  const [deviceLocation, setDeviceLocation] = useState<LatLngLiteral | null>(
    null,
  );
  const [deviceLocationAddress, setDeviceLocationAddress] = useState(
    'My current location',
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

  useEffect(() => {
    permissionStatus === 'granted' && requestLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [permissionStatus]);

  useEffect(() => {
    requestLocationAddress();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deviceLocation]);

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
      Geolocation.getCurrentPosition(
        position => {
          setDeviceLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        error => {
          console.log(error.code, error.message);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
      );
    }
  };

  const requestLocationAddress = async () => {
    if (permissionStatus === 'granted' && deviceLocation) {
      Geocoder.from(deviceLocation?.lat, deviceLocation?.lng)
        .then(json => {
          let addressComponent = [];
          if (json.results[0].address_components[1]?.long_name) {
            addressComponent.push(
              json.results[0].address_components[1]?.long_name,
            );
          }
          if (json.results[0].address_components[0]?.long_name) {
            addressComponent.push(
              json.results[0].address_components[0]?.long_name,
            );
          }
          if (json.results[0].address_components[2]?.long_name) {
            addressComponent.push(
              json.results[0].address_components[2]?.long_name,
            );
          }
          setDeviceLocationAddress(addressComponent.join(', '));
        })
        .catch(error => console.warn(error));
    }
  };

  return {
    permissionStatus,
    requestPermission,
    deviceLocation,
    requestLocation,
    requestLocationAddress,
    deviceLocationAddress,
  };
};

export default useDeviceLocation;
