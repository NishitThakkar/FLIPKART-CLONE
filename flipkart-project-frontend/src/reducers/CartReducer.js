export function cart(state = [], action) {
    switch (action.type) {
        case "ADD_PRODUCT":
            var temp = [...state];
            temp.push(action.payload);
            return temp;

        case "INC_CTR":
            // var ctr = state + 1;
            var newstate = state.map(function (a) {
                if (a._id == action.payload) {
                    a.qty = a.qty + 1
                }
                return a
            })

            return newstate;


        case "DC_CTR":
            // var ctr = state - 1;
            // return ctr;
            var newstate2 = state.map(function (b) {
                if (b._id == action.payload) {
                    b.qty = b.qty - 1
                }
                return b
            })
            return newstate2;

        case "ALL_CTR":
            // return state = 0;
            var newstate3 = state.map(function (c) {
                if (c._id == action.payload) {
                    // c.qty = c.qty * 0
                    c.qty = c.qty * 0
                }
                return c
            })
            return newstate3;

        case "DELETE_PRODUCTS":
            var temp = state.filter((pr) => {
                console.log("id to be deleted" + action.payload);
                return pr.id !== action.payload
            });
            return [...temp];
        default:
            return state;
    }
}