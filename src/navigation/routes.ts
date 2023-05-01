import { Pages } from '../enums/Pages';
import Home from '../pages/Home';
import RestaurantDetail from '../pages/RestaurantDetail';

export default {
  [Pages.HOME]: Home,
  [Pages.RESTAURANT_DETAIL]: RestaurantDetail,
} as any;
