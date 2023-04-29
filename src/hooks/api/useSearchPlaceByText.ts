import { useQuery } from '@tanstack/react-query';
import { EndPoints } from '../../enums/endPoints';
import { API_KEY } from '@env';

const getPlaceBySearchText = async (searchTxt: string) => {
  const { textSearch } = EndPoints;
  if (searchTxt === '') {
    return null;
  }
  try {
    const params = new URLSearchParams({
      query: searchTxt,
      key: API_KEY,
    });
    const response = await fetch(`${textSearch}?${params}`);
    const json = await response.json();
    return json?.results;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export function useSearchPlaceByText(searchTxt: string) {
  return useQuery(['searchPlacesByText', searchTxt], () =>
    getPlaceBySearchText(searchTxt),
  );
}
