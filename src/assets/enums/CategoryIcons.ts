import Categories from "../../model/Categories";
import GroceriesImg from '../images/categories/groceries.png';
import ShoppingImg from '../images/categories/shopping.png';
import RestaurantImg from '../images/categories/restaurant.png';
import TransportImg from '../images/categories/transport.png';
import EntertainmentImg from '../images/categories/entertainment.png';
import HealthImg from '../images/categories/health.png';
import ServicesImg from '../images/categories/services.png';
import UtilitiesImg from '../images/categories/utilities.png';
import TransferImg from '../images/categories/transfer.png';
import OtherImg from '../images/categories/other.png';

const CategoryIcons: { [key in Categories]: number } = {
  [Categories.Groceries]: GroceriesImg,
  [Categories.Shopping]: ShoppingImg,
  [Categories.Restaurants]: RestaurantImg,
  [Categories.Transportation]: TransportImg,
  [Categories.Entertainment]: EntertainmentImg,
  [Categories.Health]: HealthImg,
  [Categories.Services]: ServicesImg,
  [Categories.Utilities]: UtilitiesImg,
  [Categories.Transfer]: TransferImg,
  [Categories.Other]: OtherImg,
};

export default CategoryIcons;