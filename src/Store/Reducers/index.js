import {combineReducers} from 'redux';

import products from './products'
import user from './user'
import cartProducts from './cartProducts'


export default combineReducers({
  products,
  user,
  cartProducts
})
