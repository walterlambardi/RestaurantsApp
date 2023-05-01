import React from 'react';
import { Image, View } from 'react-native';
import styles from './reviews.style';
import { Divider, Text } from 'react-native-paper';
import { PlaceReview } from '../../types/LocationTypes';

interface IProps {
  reviews: PlaceReview[];
}

const Reviews = ({ reviews }: IProps) => {
  return (
    <>
      <Text variant="titleLarge">Reviews</Text>
      {reviews?.map((review: any) => (
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
              <Text
                variant="bodySmall"
                style={
                  styles.reviewDate
                }>{`${review?.rating} ⭐ - Reviewed ${review?.relative_time_description}`}</Text>
              <Text variant="bodyMedium" style={styles.reviewText}>
                {review?.text}
              </Text>
            </View>
          </View>
          <Divider style={styles.reviewsDivider} />
        </View>
      ))}
    </>
  );
};

export default Reviews;
