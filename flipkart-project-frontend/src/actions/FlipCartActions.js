export var setUser = function (user_doc) {
    return {
        type: "SET_USER",
        payload: user_doc
    }
}
export var setRr = function (d) {
    return {
        type: "SET_RR",
        payload: d
    }
}

export var LOGOUT_USER = () => {
    return {
        type: "LOGOUT_USER"
    }
}

export var addProductToCart = (t) => {
    return {
        type: "ADD_PRODUCT",
        payload: t
    }
}

export var deleteProductFromCart = (t_id) => {
    return {
        type: "DELETE_PRODUCT",
        payload: t_id
    }
}


// export var increaseCTR = (value) => {
//     return (dispatch) => {

//         dispatch({ type: "LOADING_TRUE" })

//         fetch("/list_products").then((dispatch, v) => {
//             dispatch({ type: "INC_CTR", payload: v });
//             dispatch({ type: "LOADING_FALSE" })
//         })

//         // setTimeout((dis, v) => {

//         //     dis({ type: "INC_CTR", payload: v });
//         //     dis({ type: "LOADING_FALSE" })

//         // },
//         //     1000, dispatch, value);

//     }


// }
// export var increaseCTR = (value) => {
//     return (dispatch) => {

//         dispatch({ type: "LOADING_TRUE" })

//         fetch("/list_products").then((dispatch, v) => {
//             dispatch({ type: "INC_CTR", payload: v });
//             dispatch({ type: "LOADING_FALSE" })
//         })
//     }
// }

export var increaseCTR = (id) => {
    return {
        type: "INC_CTR",
        payload: id
    }
}
export var dCTR = (id) => {
    return {
        type: "DC_CTR",
        payload: id
    }
}
export var aCTR = (id) => {
    return {
        type: "ALL_CTR",
        payload: id
    }
}
// export var dCTR = (value) => {
//     return (dispatch) => {

//         dispatch({ type: "LOADING_TRUE" })

//         setTimeout((dis, v) => {

//             dis({ type: "DC_CTR", payload: v });
//             dis({ type: "LOADING_FALSE" })

//         },
//             1000, dispatch, value);
//     }

// }
// export var aCTR = (value) => {
//     return (dispatch) => {

//         dispatch({ type: "LOADING_TRUE" })

//         setTimeout((dis, v) => {

//             dis({ type: "ALL_CTR", payload: v });
//             dis({ type: "LOADING_FALSE" })

//         },
//             1000, dispatch, value);
//     }
// }
