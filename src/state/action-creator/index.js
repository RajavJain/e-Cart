//iska kaam kewal action dena hai..
//this will be used for adding Items in the cart...
export const addItem=(qty)=>{
    return (dispatch) =>{
        dispatch ({
            type: 'add',
            payload: 'qty'
        })
    }
}

export const delItem=(qty)=>{
    return (dispatch) =>{
        dispatch ({
            type: 'del',
            payload: 'qty'
        })
    }
}