export interface PlaceResult {
  formatted_address?: string;
  geometry?: PlaceGeometry;
  icon?: string;
  id?: string;
  name?: string;
  opening_hours?: OpeningHours;
  permanently_closed?: boolean;
  photos?: PlacePhoto[];
  place_id?: string;
  plus_code?: PlusCode;
  price_level?: number;
  rating?: number;
  reference?: string;
  reviews?: PlaceReview[];
  types?: string[];
  user_ratings_total?: number;
  vicinity?: string;
}

interface PlaceGeometry {
  location: LatLngLiteral;
  viewport: LatLngBounds;
}

export interface LatLngLiteral {
  lat: number;
  lng: number;
}

interface LatLngBounds {
  northeast: LatLngLiteral;
  southwest: LatLngLiteral;
}

interface OpeningHours {
  open_now: boolean;
  periods: OpeningPeriod[];
  weekday_text: string[];
}

interface OpeningPeriod {
  close: OpeningHoursTime;
  open: OpeningHoursTime;
}

interface OpeningHoursTime {
  day: number;
  time: string;
}

interface PlusCode {
  compound_code: string;
  global_code: string;
}

interface PlacePhoto {
  height: number;
  html_attributions: string[];
  photo_reference: string;
  width: number;
}

export interface PlaceReview {
  author_name: string;
  author_url: string;
  language: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
}

export type PlaceId = string;
