"use strict";

var _loadingReducer = require("./loadingReducer");

var _todoReducer = require("./todoReducer");

var _ctrReducer = require("./ctrReducer");

var _redux = require("redux");

var rootReducer = (0, _redux.combineReducers)({
  todo: _todoReducer.todo,
  loading: _loadingReducer.loading,
  ctr: _ctrReducer.ctr
});