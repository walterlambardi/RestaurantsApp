import { useQuery } from '@tanstack/react-query';
import { EndPoints } from '../../enums/endPoints';
import { API_KEY } from '@env';

interface ILocation {
  lat: number;
  lng: number;
}

const getNearbyRestaurants = async (location: ILocation) => {
  const { nearBySearch } = EndPoints;
  if (!location) {
    return [];
  }
  try {
    const params = new URLSearchParams({
      location: `${location.lat},${location.lng}`,
      radius: '5000',
      type: 'restaurant',
      key: API_KEY,
    });
    const response = await fetch(`${nearBySearch}?${params}`);
    const json = await response.json();
    return json?.results
      ?.filter((obj: { rating: number }) => obj.rating !== undefined)
      ?.slice(0, 10)
      ?.sort(
        (a: { rating: number }, b: { rating: number }) => b.rating - a.rating,
      );
  } catch (error) {
    console.error(error);
    return [];
  }
};

export function useGetNearbyRestaurants(location: ILocation) {
  return useQuery(['searchNearbyRestaurants', location], () =>
    getNearbyRestaurants(location),
  );
}
