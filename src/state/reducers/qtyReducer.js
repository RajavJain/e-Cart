export default reducer=(state=0,action) => {
    if(action.type==='add')
    {
        return state + action.payload
    }
    
    else if(action.type==='del')
    {
        return state - action.payload
    }
}