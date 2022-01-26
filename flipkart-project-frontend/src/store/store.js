import { createStore, applyMiddleware, combineReducers } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { loading } from '../reducers/loadingReducer';
import { cart } from '../reducers/CartReducer';
import { user } from '../reducers/UserReducer';
// import { ctr } from '../reducers/Ctr';
import { rar } from '../reducers/Rr_Reducer';

var rootReducer = combineReducers({ cart, loading, user, rar });


var store = createStore(rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);



export default store;
