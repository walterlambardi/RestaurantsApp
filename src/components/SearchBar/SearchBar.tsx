import React, { useEffect, useMemo, useState } from 'react';
import {
  Point,
  GooglePlacesAutocomplete,
} from 'react-native-google-places-autocomplete';
import { API_KEY } from '@env';
import { isAndroid } from '../../utils/platformUtils';
import useDeviceLocation from '../../hooks/useDeviceLocation';
import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../themes';
import styles from './searchBar.style';

interface IProps {
  onSubmit: (location: Point | null) => void;
}

const SearchBar = ({ onSubmit }: IProps) => {
  const [showListView, setShowListView] = useState(true);
  const { requestPermission, deviceLocation, deviceLocationAddress } =
    useDeviceLocation();

  useEffect(() => {
    requestPermission();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deviceLocationPlace = useMemo(() => {
    if (deviceLocation && showListView) {
      return [
        {
          description: deviceLocationAddress,
          geometry: { location: deviceLocation },
        },
      ];
    }
    return undefined;
  }, [deviceLocation, deviceLocationAddress, showListView]);

  const customInputStyles = useMemo(() => {
    return {
      ...styles,
      listView: {
        marginHorizontal: 15 * metrics.scaleCoefficient,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: colors.gray,
        marginBottom: 15 * metrics.scaleCoefficient,
        display: showListView ? 'flex' : 'none',
        backgroundColor: colors.gray,
      },
    };
  }, [showListView]);

  return (
    <GooglePlacesAutocomplete
      placeholder="Please enter an address"
      onPress={(_, details = null) => {
        if (details?.geometry?.location) {
          onSubmit(details?.geometry?.location);
          setShowListView(false);
        }
      }}
      listViewDisplayed="auto"
      fetchDetails={true}
      query={{ key: API_KEY, language: 'en' }}
      enablePoweredByContainer={false}
      textInputProps={{
        autoFocus: true,
        blurOnSubmit: false,
        onFocus: () => setShowListView(true),
      }}
      predefinedPlaces={deviceLocationPlace}
      predefinedPlacesAlwaysVisible
      styles={customInputStyles}
      debounce={200}
      keepResultsAfterBlur={isAndroid ? true : false}
      filterReverseGeocodingByTypes={['street_address', 'street_number']}
      GooglePlacesDetailsQuery={{ fields: 'geometry' }}
      suppressDefaultStyles={true}
    />
  );
};

export default SearchBar;
