import React, { useCallback, useEffect, useState } from 'react';
import { View, FlatList, StatusBar } from 'react-native';
import styles from './home.style';
import SearchBar from '../../components/SearchBar';
import { useSearchPlaceByText } from '../../hooks/api/useSearchPlaceByText';
import { useGetNearbyRestaurants } from '../../hooks/api/useGetNearbyRestaurants';
import { Appbar, Card, Surface } from 'react-native-paper';
import Lottie from 'lottie-react-native';
import animations from '../../themes/animations';
import useDeviceLocation from '../../hooks/useDeviceLocation';
import { PlaceResult } from '../../types/LocationTypes';
import { colors } from '../../themes';
import { getImageResourceUrl } from '../../utils/restaurantUtils';

export const Home = () => {
  const [searchBarValue, setSearchBarValue] = useState('');
  const {
    permissionStatus,
    requestPermission,
    requestLocation,
    deviceLocation,
  } = useDeviceLocation();

  const { data: searchLocation, isLoading: loadingSearchLocation } =
    useSearchPlaceByText(searchBarValue);

  const { data: nearByRestaurants, isLoading: loadingNearbyRestaurants } =
    useGetNearbyRestaurants(
      searchBarValue.length > 0
        ? searchLocation?.[0]?.geometry?.location
        : deviceLocation,
    );

  const renderItem = useCallback(({ item }: any) => {
    return (
      <Surface elevation={0} style={styles.surface}>
        <Card mode="elevated" style={styles.card}>
          <Card.Cover
            source={{
              uri: getImageResourceUrl(item.photos?.[0]?.photo_reference),
            }}
          />
          <Card.Title
            title={item.name}
            titleVariant="titleSmall"
            subtitleVariant="bodySmall"
            titleNumberOfLines={2}
            subtitle={'⭐ ' + item?.rating}
            subtitleNumberOfLines={2}
            titleStyle={styles.cardTitleStyle}
            subtitleStyle={styles.cardSubTitleStyle}
          />
        </Card>
      </Surface>
    );
  }, []);

  const keyExtractor = (resto: PlaceResult) => `$restaurant-${resto?.place_id}`;

  const renderHeaderComponent = useCallback(() => {
    return (
      <SearchBar
        onSubmit={setSearchBarValue}
        placeholder={'Please enter an address'}
        style={styles.searchBar}
        showLocationIcon={permissionStatus === 'granted'}
        locationIconPress={requestLocation}
      />
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [permissionStatus]);

  useEffect(() => {
    requestPermission();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={colors.white} />
      <Appbar.Header style={styles.bgColor} mode="center-aligned">
        <Appbar.Content
          title={'Restaurant App'}
          titleStyle={styles.pageTitle}
        />
      </Appbar.Header>
      <FlatList
        data={nearByRestaurants}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        ListHeaderComponent={renderHeaderComponent}
        stickyHeaderHiddenOnScroll
        stickyHeaderIndices={[0]}
      />
      {(loadingSearchLocation || loadingNearbyRestaurants) && (
        <View style={styles.animationsContainers}>
          <Lottie source={animations.loading} loop={true} autoPlay={true} />
        </View>
      )}
      {nearByRestaurants?.length === 0 && !!searchLocation && (
        <View style={styles.animationsContainers}>
          <Lottie source={animations.noresult} loop={true} autoPlay={true} />
        </View>
      )}
    </View>
  );
};
