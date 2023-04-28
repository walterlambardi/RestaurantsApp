import React, { useState } from 'react';
import { View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import styles from './searchBar.style';

interface IProps {
  onSubmit: (searchTerm: string) => void;
  placeholder: string;
}

const SearchBar = ({ onSubmit, placeholder }: IProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchTermChange = (searchTxt: string) => {
    setSearchTerm(searchTxt);
  };

  const handleSubmitEditing = () => {
    onSubmit(searchTerm);
  };

  return (
    <View style={styles.container}>
      <Searchbar
        style={styles.input}
        placeholder={placeholder}
        value={searchTerm}
        onChangeText={handleSearchTermChange}
        onSubmitEditing={handleSubmitEditing}
        returnKeyType="search"
      />
    </View>
  );
};

export default SearchBar;
