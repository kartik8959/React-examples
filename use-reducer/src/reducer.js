const reducer=(state,action)=>{
    switch(action.type){
        case 'UPDATE_NAME':
            state={
                ...state,
                name:action.data
            }
            break;
        case 'UPDATE_LOC':
            state={
                ...state,
                loc:action.data
            }
            break;
        case 'UPDATE_RUNS':
            state={
                ...state,
                runs:action.data
            }
            break;
    }
    return state;
}

export default reducer;