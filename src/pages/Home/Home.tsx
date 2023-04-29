import React, { useCallback, useState } from 'react';
import { View, FlatList } from 'react-native';
import styles from './home.style';
import SearchBar from '../../components/SearchBar';
import { useSearchPlaceByText } from '../../hooks/api/useSearchPlaceByText';
import { useGetNearbyRestaurants } from '../../hooks/api/useGetNearbyRestaurants';
import {
  Appbar,
  Avatar,
  Card,
  IconButton,
  Surface,
  Text,
} from 'react-native-paper';

export const Home = () => {
  const [searchBarValue, SetSearchBarValue] = useState('');
  const { data: searchedLocation, isLoading: loadingPlace } =
    useSearchPlaceByText(searchBarValue);
  const { data: nearByRestaurants, isLoading: loadingNearbyRestaurants } =
    useGetNearbyRestaurants(searchedLocation?.[0]?.geometry?.location);

  const cardLeftComp = (props: any) => <Avatar.Icon {...props} icon="folder" />;
  const cardRightComp = (props: any) => (
    <IconButton icon="dots-vertical" {...props} onPress={() => {}} />
  );

  const renderItem = useCallback(({ item }: any) => {
    return (
      <Surface elevation={1} style={styles.surface}>
        <Card.Title
          title={item.name + ' (' + item.rating + ')'}
          subtitle={item.vicinity}
          left={cardLeftComp}
          right={cardRightComp}
        />
      </Surface>
    );
  }, []);

  const keyExtractor = (resto: { place_id: string }) =>
    `$restaurant-${resto?.place_id}`;

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Restaurants App" />
      </Appbar.Header>
      <SearchBar
        onSubmit={SetSearchBarValue}
        placeholder={'Please enter an address'}
      />
      {loadingPlace || (loadingNearbyRestaurants && <Text>Loading!</Text>)}
      {nearByRestaurants?.length === 0 && searchedLocation && (
        <Text>No results!</Text>
      )}
      <FlatList
        data={nearByRestaurants}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};
