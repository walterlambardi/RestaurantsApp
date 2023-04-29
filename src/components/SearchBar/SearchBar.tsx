import React, { useState } from 'react';
import { View, ViewStyle } from 'react-native';
import { Searchbar } from 'react-native-paper';
import styles from './searchBar.style';

interface IProps {
  onSubmit: (searchTerm: string) => void;
  placeholder: string;
  style?: ViewStyle;
}

const SearchBar = ({ onSubmit, placeholder, style }: IProps) => {
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
        style={styles.input}
        placeholder={placeholder}
        value={searchTerm}
        onChangeText={handleSearchTermChange}
        onSubmitEditing={handleSubmitEditing}
        returnKeyType="search"
        onClearIconPress={onClearIconPress}
        elevation={1}
      />
    </View>
  );
};

export default SearchBar;
