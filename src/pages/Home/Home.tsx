import React, { useCallback, useState } from 'react';
import { View, FlatList } from 'react-native';
import styles from './home.style';
import SearchBar from '../../components/SearchBar';
import { useSearchPlaceByText } from '../../hooks/api/useSearchPlaceByText';
import { useGetNearbyRestaurants } from '../../hooks/api/useGetNearbyRestaurants';
import { Appbar, Card, Surface } from 'react-native-paper';
import Lottie from 'lottie-react-native';
import animations from '../../themes/animations';
import { API_HOST, API_KEY } from '@env';

export const Home = () => {
  const [searchBarValue, setSearchBarValue] = useState('');
  const { data: searchedLocation, isLoading: loadingSearchedLocation } =
    useSearchPlaceByText(searchBarValue);
  const { data: nearByRestaurants, isLoading: loadingNearbyRestaurants } =
    useGetNearbyRestaurants(searchedLocation?.[0]?.geometry?.location);

  const setImageResource = (photo: string) => {
    return photo
      ? `${API_HOST}/photo?maxwidth=400&photo_reference=${photo}&key=${API_KEY}`
      : 'https://placehold.co/400x400/000000/FFFFFF.png';
  };

  const renderItem = useCallback(({ item }: any) => {
    return (
      <Surface elevation={0} style={styles.surface}>
        <Card>
          <Card.Cover
            source={{
              uri: setImageResource(item?.photos[0]?.photo_reference),
            }}
          />
          <Card.Title
            title={item.name}
            titleNumberOfLines={2}
            subtitle={'⭐ ' + item?.rating}
            subtitleNumberOfLines={2}
            titleStyle={styles.cardTitleStyle}
            subtitleStyle={styles.cardSubTitleStyle}
            style={styles.cardTitle}
          />
        </Card>
      </Surface>
    );
  }, []);

  const keyExtractor = (resto: { place_id: string }) =>
    `$restaurant-${resto?.place_id}`;

  const renderHeaderComponent = useCallback(() => {
    return (
      <SearchBar
        onSubmit={setSearchBarValue}
        placeholder={'Please enter an address'}
        style={styles.searchBar}
      />
    );
  }, []);

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.bgColor}>
        <Appbar.Content title="Restaurants App" />
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
      {(loadingSearchedLocation || loadingNearbyRestaurants) && (
        <View style={styles.animationsContainers}>
          <Lottie source={animations.loading} loop={true} autoPlay={true} />
        </View>
      )}
      {nearByRestaurants?.length === 0 && searchedLocation && (
        <View style={styles.animationsContainers}>
          <Lottie source={animations.noresult} loop={true} autoPlay={true} />
        </View>
      )}
    </View>
  );
};
