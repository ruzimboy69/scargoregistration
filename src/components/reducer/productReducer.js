export default function productReducer(state={
    title:'fruits',
    price:2000,
    products:[
        {
        name:'Apple',
        price:6000,
        weight:'3kg'
        },
        {
            name:'Banana',
            price:20000,
            weight:'1kg'
        },
        {
            name:'cherry',
            price:3000,
            weight:'5kg'
        },
        {
            name:'Strawberry',
            price:10000,
            weight:'2kg'
        }
        ]
},action) {
    switch (action.type) {
        case 'SET_PRICE' :
            state={
                ...state,
                price:action.payload
            };
            break;
    }
    return state
}