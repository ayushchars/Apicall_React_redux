const initialState = {
    product : []
}

export const reducer = (state = initialState, action)=>{
    if(action.type === "SET_PRODUCT"){
        return {...state , product : action.payload};
    }
    else {
        return state
    }
}

export const productDetail =(state = {} ,action)=>{
    
    if(action.type === "SELECTED_PRODUCT"){
        return {...state ,...action.payload}
    }
    else{
        return state
    }
}

export const IcrementReducer = (state = 1,action)=>{
    if(action.type === "INCREMENT"){
        return state + action.payload
    }
    else if(action.type === "DECREMENT"){
        return state - action.payload

    }
    else {
         return state
    }
}

