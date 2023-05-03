import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PlaceId } from '../../types/LocationTypes';

interface PlaceLikesState {
  likedPlaces: PlaceId[];
}

const initialState: PlaceLikesState = {
  likedPlaces: [],
};

const placeLikesSlice = createSlice({
  name: 'placeLikes',
  initialState,
  reducers: {
    toggleLike: (state, action: PayloadAction<PlaceId>) => {
      const index = state.likedPlaces.indexOf(action.payload);
      if (index === -1) {
        state.likedPlaces.push(action.payload);
      } else {
        state.likedPlaces.splice(index, 1);
      }
    },
  },
});

export const { toggleLike } = placeLikesSlice.actions;

export default placeLikesSlice.reducer;
