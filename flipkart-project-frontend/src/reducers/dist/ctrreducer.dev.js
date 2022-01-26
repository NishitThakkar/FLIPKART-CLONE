"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ctr = ctr;

function ctr() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "INC_CTR":
      var ctr = state + action.payload;
      return ctr;

    default:
      return state;
  }
}