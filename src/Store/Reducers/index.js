import {combineReducers} from 'redux';

import products from './products'
import user from './user'


export default combineReducers({
  products,
  user
})
