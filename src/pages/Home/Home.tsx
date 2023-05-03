import React, { useCallback, useState } from 'react';
import {
  View,
  FlatList,
  StatusBar,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from './home.style';
import SearchBar from '../../components/SearchBar';
import { useGetNearbyRestaurants } from '../../hooks/api/useGetNearbyRestaurants';
import { Appbar, Card, Surface, Text } from 'react-native-paper';
import animations from '../../themes/animations';
import { PlaceResult } from '../../types/LocationTypes';
import { colors } from '../../themes';
import { getImageResourceUrl } from '../../utils/restaurantUtils';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../navigation';
import { Pages } from '../../enums/Pages';
import { Point } from 'react-native-google-places-autocomplete';
import LottieView from '../../components/LottieView';
import RatingStars from '../../components/RatingStars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { toggleLike } from '../../store/placeLikes/placeLikesSlice';

type Props = NativeStackScreenProps<RootStackParams, Pages.HOME>;

export const Home = ({ navigation }: Props) => {
  const [location, setLocation] = useState<Point | null>(null);

  const { data: nearByRestaurants, isLoading: loadingNearbyRestaurants } =
    useGetNearbyRestaurants(location);

  const likedPlaces = useSelector(
    (state: RootState) => state.placeLikes.likedPlaces,
  );
  const dispatch = useDispatch();

  const handleToggleLike = useCallback(
    (id: string | undefined) => {
      if (id) {
        dispatch(toggleLike(id));
      }
    },
    [dispatch],
  );

  const handleRestaurantPress = useCallback(
    (restaurant: PlaceResult) =>
      navigation.navigate(Pages.RESTAURANT_DETAIL, { restaurant }),
    [navigation],
  );

  const renderItem = useCallback(
    ({ item }: { item: PlaceResult }) => {
      const isLiked = likedPlaces.find(id => item?.place_id === id);
      return (
        <TouchableWithoutFeedback onPress={() => handleRestaurantPress(item)}>
          <Surface elevation={0} style={styles.surface}>
            <Card mode="elevated" style={styles.card}>
              <Card.Cover
                source={{
                  uri: getImageResourceUrl(item.photos?.[0]?.photo_reference),
                }}
              />
              <Card.Content>
                <Text variant="titleMedium" style={styles.cardTitleStyle}>
                  {item.name}
                </Text>
                {!!item?.rating && (
                  <View style={styles.ratingContainer}>
                    <RatingStars
                      maxRating={5}
                      rating={item?.rating}
                      iconSize={14}
                    />
                    <Text variant="bodySmall" style={styles.cardSubTitleStyle}>
                      ({item.rating})
                    </Text>
                  </View>
                )}
              </Card.Content>
              <TouchableWithoutFeedback
                onPress={() => handleToggleLike(item?.place_id)}>
                <View style={styles.rightIconContainer}>
                  <Icon
                    name={isLiked ? 'heart' : 'heart-outline'}
                    style={styles.rightIcon}
                    color={isLiked ? colors.pink : colors.white}
                  />
                </View>
              </TouchableWithoutFeedback>
            </Card>
          </Surface>
        </TouchableWithoutFeedback>
      );
    },
    [handleRestaurantPress, handleToggleLike, likedPlaces],
  );

  const keyExtractor = (resto: PlaceResult) => `$restaurant-${resto?.place_id}`;

  const renderHeaderWithSearchBar = useCallback(
    () => <SearchBar onSubmit={setLocation} />,
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
      {loadingNearbyRestaurants && !!location && (
        <LottieView source={animations.loading} loop={true} autoPlay={true} />
      )}
      {nearByRestaurants?.length === 0 && !!location && (
        <LottieView source={animations.noresult} loop={true} autoPlay={true} />
      )}
    </View>
  );
};
