"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.todos = todos;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function todos() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [{
    id: 1,
    task: "first"
  }];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "ADD_TODO":
      var temp = _toConsumableArray(state);

      temp.push(action.payload);
      return temp;

    case "GET_PRODUCTS":
      return temp;

    case "DELETE_TODO":
      var temp = state.filter(function (todo) {
        console.log("id to be deleted" + action.payload);
        return todo.id !== action.payload;
      });
      return _toConsumableArray(temp);

    default:
      return state;
  }
}