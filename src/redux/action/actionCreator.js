export const SetProduct = (product)=>{
    return dispatch=>{
        dispatch({
            type: "SET_PRODUCT",
            payload : product
        })
    }
}
export const SelectedProduct = (product)=>{
    return dispatch=>{
        dispatch({
            type: "SELECTED_PRODUCT",
            payload : product
        })
    }
}

export const Increment = (num)=>{
    return dispatch=>{
        dispatch({
            type : "INCREMENT",
            payload : num
        })
    }
}
export const Decrement = (num)=>{
    return dispatch=>{
        dispatch({
            type : "DECREMENT",
            payload : num
        })
    }
}