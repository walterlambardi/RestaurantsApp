import { combineReducers } from '@reduxjs/toolkit';
import placeLikesReducer from './placeLikes/placeLikesSlice';

const rootReducer = combineReducers({
  placeLikes: placeLikesReducer,
});

export default rootReducer;
