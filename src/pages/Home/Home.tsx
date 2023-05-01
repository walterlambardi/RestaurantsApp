import React, { useCallback, useEffect, useState } from 'react';
import {
  View,
  FlatList,
  StatusBar,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from './home.style';
import SearchBar from '../../components/SearchBar';
import { useSearchPlaceByText } from '../../hooks/api/useSearchPlaceByText';
import { useGetNearbyRestaurants } from '../../hooks/api/useGetNearbyRestaurants';
import { Appbar, Card, Divider, Surface } from 'react-native-paper';
import Lottie, { AnimatedLottieViewProps } from 'lottie-react-native';
import animations from '../../themes/animations';
import useDeviceLocation from '../../hooks/useDeviceLocation';
import { PlaceResult } from '../../types/LocationTypes';
import { colors } from '../../themes';
import { getImageResourceUrl } from '../../utils/restaurantUtils';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../navigation';
import { Pages } from '../../enums/Pages';

type Props = NativeStackScreenProps<RootStackParams, Pages.HOME>;

export const Home = ({ navigation }: Props) => {
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

  const handleRestaurantPress = useCallback(
    (restaurant: PlaceResult) =>
      navigation.navigate(Pages.RESTAURANT_DETAIL, { restaurant }),
    [navigation],
  );

  const renderItem = useCallback(
    ({ item }: { item: PlaceResult }) => {
      return (
        <TouchableWithoutFeedback onPress={() => handleRestaurantPress(item)}>
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
        </TouchableWithoutFeedback>
      );
    },
    [handleRestaurantPress],
  );

  const keyExtractor = (resto: PlaceResult) => `$restaurant-${resto?.place_id}`;

  const renderHeaderWithSearchBar = useCallback(() => {
    return (
      <View style={styles.searchBarContainer}>
        <SearchBar
          onSubmit={setSearchBarValue}
          placeholder={'Please enter an address'}
          style={styles.searchBar}
          showLocationIcon={permissionStatus === 'granted'}
          locationIconPress={requestLocation}
        />
        <Divider />
      </View>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [permissionStatus]);

  useEffect(() => {
    requestPermission();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const LottieView = useCallback(
    (
      props: JSX.IntrinsicAttributes &
        JSX.IntrinsicClassAttributes<Lottie> &
        Readonly<AnimatedLottieViewProps>,
    ) => {
      return (
        <View style={styles.animationsContainers}>
          <Lottie {...props} />
        </View>
      );
    },
    [],
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={colors.white} />
      <Appbar.Header style={styles.appBarHeader} mode="center-aligned">
        <Appbar.Content title={'BiteFinder'} titleStyle={styles.pageTitle} />
      </Appbar.Header>
      <FlatList
        data={nearByRestaurants}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        ListHeaderComponent={renderHeaderWithSearchBar}
        stickyHeaderHiddenOnScroll
        stickyHeaderIndices={[0]}
      />
      {(loadingSearchLocation || loadingNearbyRestaurants) && (
        <LottieView source={animations.loading} loop={true} autoPlay={true} />
      )}
      {nearByRestaurants?.length === 0 && !!searchLocation && (
        <LottieView source={animations.noresult} loop={true} autoPlay={true} />
      )}
    </View>
  );
};
