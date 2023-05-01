import { API_HOST } from '@env';

export const EndPoints = {
  textSearch: `${API_HOST}/textsearch/json`,
  nearBySearch: `${API_HOST}/nearbysearch/json`,
  detailsByPlaceId: `${API_HOST}/details/json`,
};
