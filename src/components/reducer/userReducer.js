export default function reducer(state={
    age:22,
    name:"ali"
},action){
    switch(action.type) {
        case 'SET_AGE':
            state={
                ...state,
                age:action.payload
            }
            break;
        case 'SET_NAME':
            state={
                ...state,
                name:action.payload
            }
            break;
    }
    return state
}