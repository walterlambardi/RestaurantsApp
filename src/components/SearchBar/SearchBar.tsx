import React, { useState } from 'react';
import { View, ViewStyle } from 'react-native';
import { IconButton, Searchbar } from 'react-native-paper';
import styles from './searchBar.style';

interface IProps {
  onSubmit: (searchTerm: string) => void;
  placeholder: string;
  style?: ViewStyle;
  showLocationIcon?: boolean;
  locationIconPress?: () => void;
}

const SearchBar = ({
  onSubmit,
  placeholder,
  style,
  showLocationIcon,
  locationIconPress,
}: IProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchTermChange = (searchTxt: string) =>
    setSearchTerm(searchTxt);

  const handleSubmitEditing = () => onSubmit(searchTerm);

  const onClearIconPress = () => {
    setSearchTerm('');
    onSubmit('');
  };

  return (
    <View style={[styles.container, style]}>
      <Searchbar
        style={styles.searchbar}
        placeholder={placeholder}
        value={searchTerm}
        onChangeText={handleSearchTermChange}
        onSubmitEditing={handleSubmitEditing}
        returnKeyType="search"
        onClearIconPress={onClearIconPress}
        elevation={1}
        showDivider={true}
      />
      {searchTerm?.length === 0 && showLocationIcon && (
        <IconButton
          icon="map-marker"
          onPress={locationIconPress}
          style={styles.locationIcon}
        />
      )}
    </View>
  );
};

export default SearchBar;
