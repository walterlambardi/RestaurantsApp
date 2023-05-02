import React, { useRef } from 'react';
import {
  Animated,
  View,
  StatusBar,
  TouchableWithoutFeedback,
} from 'react-native';
import { Divider, Text } from 'react-native-paper';
import { useGetDetailsFromPlaceId } from '../../hooks/api/useGetDetailsFromPlaceId';
import { getImageResourceUrl } from '../../utils/restaurantUtils';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../navigation';
import { Pages } from '../../enums/Pages';
import styles from './restaurantDetail.style';
import {
  headerHeightProgress,
  imageOverlarOpacity,
  subTitleOpacity,
  titleFontSizeProgress,
  titleProgress,
} from './restaurantDetail.animations';
import useMakePhoneCall from '../../hooks/useMakePhoneCall';
import StarRatingDisplay from 'react-native-star-rating-widget';
import Icon from 'react-native-vector-icons/FontAwesome';
import Reviews from '../../components/Reviews';

type Props = NativeStackScreenProps<RootStackParams, Pages.RESTAURANT_DETAIL>;

export const RestaurantDetail = ({ navigation, route }: Props) => {
  const { restaurant } = route.params;
  const { data: details } = useGetDetailsFromPlaceId(restaurant?.place_id);
  const scrollY = useRef(new Animated.Value(0)).current;
  const makePhoneCall = useMakePhoneCall();

  const goBack = () => navigation.goBack();

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
          onPress={() => makePhoneCall(details?.international_phone_number)}>
          <View style={styles.phoneIconContainer}>
            <Icon name="phone" style={styles.phoneIcon} />
          </View>
        </TouchableWithoutFeedback>
        <Animated.Text
          numberOfLines={2}
          style={[
            styles.headerTitle,
            {
              fontSize: titleFontSizeProgress(scrollY),
              transform: [{ translateY: titleProgress(scrollY) }],
            },
          ]}>
          {restaurant?.name}
        </Animated.Text>
        <Animated.Text
          numberOfLines={2}
          style={[
            styles.headerSubTitle,
            {
              opacity: subTitleOpacity(scrollY),
              transform: [{ translateY: titleProgress(scrollY) }],
            },
          ]}>
          {restaurant?.opening_hours?.open_now ? "We're open!" : 'Closed'}
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
        <Text numberOfLines={3} style={styles.title}>
          {restaurant?.name}
        </Text>
        <Text numberOfLines={3} style={styles.subTitle}>
          {details?.vicinity}
        </Text>

        <View style={styles.ratingContainer}>
          <StarRatingDisplay
            maxStars={5}
            rating={details?.rating}
            enableHalfStar
            starSize={18}
            onChange={() => null}
          />
          <Text
            style={
              styles.rating
            }>{`(${details?.user_ratings_total} reviews)`}</Text>
        </View>

        <Divider style={styles.divider} />

        <Reviews reviews={details?.reviews} />

        <View style={styles.spaceXL} />
      </Animated.ScrollView>
    </View>
  );
};
