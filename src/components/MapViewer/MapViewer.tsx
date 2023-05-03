import React from 'react';
import MapView, {
  Marker,
  PROVIDER_DEFAULT,
  PROVIDER_GOOGLE,
} from 'react-native-maps';
import { colors, metrics } from '../../themes';
import { isAndroid } from '../../utils/platformUtils';
import { Point } from 'react-native-google-places-autocomplete';
import styles from './mapViewer.style';
import { View } from 'react-native';

const ASPECT_RATIO = metrics.screenWidth / metrics.screenHeight;
const LATITUDE_DELTA = 0.004;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

interface IProps {
  location: Point;
  name: string;
}

const MapViewer = ({ location, name }: IProps) => {
  if (!location) {
    return null;
  }
  return (
    <View style={styles.container}>
      <MapView
        provider={isAndroid ? PROVIDER_GOOGLE : PROVIDER_DEFAULT}
        style={styles.map}
        region={{
          latitude: location.lat,
          longitude: location.lng,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
        pointerEvents="none"
        zoomControlEnabled={false}
        pitchEnabled={false}
        rotateEnabled={false}
        zoomEnabled={false}
        scrollEnabled={false}>
        <Marker
          title={name}
          coordinate={{
            latitude: location.lat,
            longitude: location.lng,
          }}
          pinColor={colors.pink}
        />
      </MapView>
    </View>
  );
};

export default MapViewer;
