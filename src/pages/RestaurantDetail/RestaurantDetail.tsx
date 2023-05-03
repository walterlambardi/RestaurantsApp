import React, { useRef } from 'react';
import {
  Animated,
  View,
  StatusBar,
  TouchableWithoutFeedback,
} from 'react-native';
import { Chip, Text } from 'react-native-paper';
import { useGetDetailsFromPlaceId } from '../../hooks/api/useGetDetailsFromPlaceId';
import { getImageResourceUrl } from '../../utils/restaurantUtils';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../navigation';
import { Pages } from '../../enums/Pages';
import styles from './restaurantDetail.style';
import {
  headerHeightProgress,
  imageOverlarOpacity,
  titleOpacity,
} from './restaurantDetail.animations';
import useMakePhoneCall from '../../hooks/useMakePhoneCall';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Reviews from '../../components/Reviews';
import MapViewer from '../../components/MapViewer';
import RatingStars from '../../components/RatingStars';
import { colors } from '../../themes';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { toggleLike } from '../../store/placeLikes/placeLikesSlice';

type Props = NativeStackScreenProps<RootStackParams, Pages.RESTAURANT_DETAIL>;

export const RestaurantDetail = ({ navigation, route }: Props) => {
  const { restaurant } = route.params;
  const { data: details } = useGetDetailsFromPlaceId(restaurant?.place_id);
  const scrollY = useRef(new Animated.Value(0)).current;
  const makePhoneCall = useMakePhoneCall();

  const likedPlace = useSelector((state: RootState) =>
    state.placeLikes.likedPlaces.find(id => restaurant?.place_id === id),
  );
  const dispatch = useDispatch();

  const handleToggleLike = (id: string | undefined) => {
    !!id && dispatch(toggleLike(id));
  };

  const goBack = () => navigation.goBack();

  const locationIcon = () => <Icon name="store" style={styles.locationIcon} />;

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={'light-content'}
      />
      <Animated.View
        style={[styles.header, { height: headerHeightProgress(scrollY) }]}>
        <TouchableWithoutFeedback onPress={goBack}>
          <View style={styles.backIconContainer}>
            <Icon name="chevron-left" style={styles.backIcon} />
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => handleToggleLike(restaurant?.place_id)}>
          <View style={styles.rightIconContainer}>
            <Icon
              name={likedPlace ? 'heart' : 'heart-outline'}
              style={styles.rightIcon}
              color={likedPlace ? colors.pink : colors.black}
            />
          </View>
        </TouchableWithoutFeedback>
        <Animated.Text
          numberOfLines={2}
          style={[styles.headerTitle, { opacity: titleOpacity(scrollY) }]}>
          {restaurant?.name}
        </Animated.Text>
        <>
          <Animated.Image
            source={{
              uri: getImageResourceUrl(
                restaurant?.photos?.[0]?.photo_reference,
              ),
            }}
            style={[
              styles.headerBackground,
              { height: headerHeightProgress(scrollY) },
            ]}
          />
          <Animated.View
            style={[styles.overlay, { opacity: imageOverlarOpacity(scrollY) }]}
          />
        </>
      </Animated.View>
      <Animated.ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false },
        )}>
        <View style={styles.titleContainer}>
          <Text numberOfLines={3} style={styles.title}>
            {restaurant?.name}
          </Text>
          <TouchableWithoutFeedback
            onPress={() => makePhoneCall(details?.international_phone_number)}>
            <View style={styles.phoneIconContainer}>
              <Icon name="phone" style={styles.phoneIcon} />
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.ratingContainer}>
          <RatingStars maxRating={5} rating={details?.rating} iconSize={18} />
          <Text
            style={
              styles.rating
            }>{`(${details?.user_ratings_total} reviews)`}</Text>
        </View>

        <View style={styles.spaceM} />

        <Chip icon={locationIcon} style={styles.addressChip} mode="flat">
          {details?.vicinity || ''}
        </Chip>

        <View style={styles.spaceS} />
        {details?.geometry?.location && (
          <>
            <MapViewer
              location={details?.geometry?.location}
              name={details?.name}
            />
            <View style={styles.spaceM} />
          </>
        )}

        <Reviews reviews={details?.reviews} />

        <View style={styles.spaceXL} />
      </Animated.ScrollView>
    </View>
  );
};
