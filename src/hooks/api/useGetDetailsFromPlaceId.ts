import { useQuery } from '@tanstack/react-query';
import { EndPoints } from '../../enums/endPoints';
import { API_KEY } from '@env';

const getDetailsFromPlaceId = async (placeId: string | undefined) => {
  const { detailsByPlaceId } = EndPoints;
  if (!placeId) {
    return [];
  }
  try {
    const params = new URLSearchParams({
      placeid: placeId,
      key: API_KEY,
    });
    const response = await fetch(`${detailsByPlaceId}?${params}`);
    const json = await response.json();
    return json?.result;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export function useGetDetailsFromPlaceId(placeId: string | undefined) {
  return useQuery(['detailsByPlaceId', placeId], () =>
    getDetailsFromPlaceId(placeId),
  );
}
