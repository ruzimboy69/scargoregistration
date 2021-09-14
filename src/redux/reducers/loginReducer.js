

const initialState={
    isLoader:false
};
export const loginReducers=(state=initialState,action)=>{

    switch (action.type) {
        case 'LOGIN':
            state={
                ...state,
                isLoader:!state.isLoader
            };
            break;
    }
return state;
};