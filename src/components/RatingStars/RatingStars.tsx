import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './ratingStars.style';

interface IProps {
  maxRating: number;
  rating: number;
  icon?: string;
  iconSize?: number;
  iconFilledColor?: string;
  iconEmptyColor?: string;
}

const RatingStars = ({
  maxRating,
  rating,
  icon = 'star',
  iconSize = 20,
  iconFilledColor = 'gold',
  iconEmptyColor = 'lightgray',
}: IProps) => {
  const filledStars = Math.round(rating);
  const emptyStars = Math.round(maxRating - rating);

  return (
    <View style={styles.container}>
      {filledStars > 0 &&
        [...Array(filledStars)]?.map((_, index) => (
          <Icon
            key={`${index}-filled`}
            name={icon}
            style={[
              styles.filledStar,
              { fontSize: iconSize, color: iconFilledColor },
            ]}
          />
        ))}
      {emptyStars > 0 &&
        [...Array(emptyStars)]?.map((_, index) => (
          <Icon
            key={`${index}-empty`}
            name={icon}
            style={[
              styles.emptyStar,
              { fontSize: iconSize, color: iconEmptyColor },
            ]}
          />
        ))}
    </View>
  );
};

export default RatingStars;
