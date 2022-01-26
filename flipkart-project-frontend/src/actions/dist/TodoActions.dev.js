"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.increaseCTR = exports.deleteTodo = exports.createTodo = void 0;

var createTodo = function createTodo(t) {
  return {
    type: "ADD_TODO",
    payload: t
  };
};

exports.createTodo = createTodo;

var deleteTodo = function deleteTodo(t_id) {
  return {
    type: "DELETE_TODO",
    payload: t_id
  };
};

exports.deleteTodo = deleteTodo;

var increaseCTR = function increaseCTR(value) {
  return function (dispatch) {
    dispatch({
      type: "LOADING_TRUE"
    }); // fetch("url").then((d)=>{ 
    //     dis({  type:"INC_CTR", payload:v });
    //     dis({type:"LOADING_FALSE"}) 
    //   })

    setTimeout(function (dis, v) {
      dis({
        type: "INC_CTR",
        payload: v
      });
      dis({
        type: "LOADING_FALSE"
      });
    }, 10000, dispatch, value);
  };
};

exports.increaseCTR = increaseCTR;
8000607847;