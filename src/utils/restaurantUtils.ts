import { API_HOST, API_KEY } from '@env';

export const getImageResourceUrl = (photo: string | undefined) => {
  return photo
    ? `${API_HOST}/photo?maxwidth=400&photo_reference=${photo}&key=${API_KEY}`
    : 'https://placehold.co/400x400/000000/FFFFFF.png';
};
