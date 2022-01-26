import { loading } from './loadingReducer';
import { cart } from './CartReducer';
import { user } from './UserReducer';
import { ctr } from './Ctr';

import { combineReducers } from 'redux'

var rootReducer = combineReducers({ loading, user, cart, ctr });

