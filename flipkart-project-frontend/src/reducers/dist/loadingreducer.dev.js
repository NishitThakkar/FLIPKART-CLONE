"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loading = loading;

function loading() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "LOADING_TRUE":
      return true;

    case "LOADING_FALSE":
      return false;

    default:
      return state;
  }
}