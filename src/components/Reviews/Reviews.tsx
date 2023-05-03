import React from 'react';
import { Image, View } from 'react-native';
import styles from './reviews.style';
import { Divider, Text } from 'react-native-paper';
import { PlaceReview } from '../../types/LocationTypes';
import RatingStars from '../RatingStars';

interface IProps {
  reviews: PlaceReview[] | null;
}

const Reviews = ({ reviews }: IProps) => {
  if (!reviews) {
    return null;
  }
  return (
    <>
      <Text variant="titleLarge">Reviews</Text>
      {reviews?.length > 0 ? (
        reviews?.map((review: PlaceReview) => (
          <View key={`${review?.time}`}>
            <View style={styles.reviewContainer}>
              <Image
                source={{
                  uri: review?.profile_photo_url,
                }}
                style={styles.reviewerImage}
              />
              <View style={styles.container}>
                <Text variant="titleMedium" style={styles.reviewAuthor}>
                  {review?.author_name}
                </Text>

                <View style={styles.rating}>
                  <RatingStars
                    maxRating={5}
                    rating={review?.rating}
                    iconSize={12}
                  />
                  <Text
                    variant="bodySmall"
                    style={
                      styles.reviewDate
                    }>{`(${review?.rating}) - Reviewed ${review?.relative_time_description}`}</Text>
                </View>
                <Text style={styles.reviewText}>{review?.text}</Text>
              </View>
            </View>
            <Divider style={styles.reviewsDivider} />
          </View>
        ))
      ) : (
        <Text variant="bodyMedium">No reviews</Text>
      )}
    </>
  );
};

export default Reviews;
