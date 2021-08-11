export default function (state={
    tasks:[
        {
            id:1,
            title:"task one"
        },
        {
            id:2,
            title:"task two"
        }
    ]
},action){
    switch (action.type){
        case "ADD_TASK" :
            let newTask=[...state.tasks];
            newTask.push({
                id:state.tasks.length+1,
                title:action.payload
            });
            state={
                ...state,
                tasks:newTask
            };
            break;
        case "DELETE_TASK" :
            let deleteTask=[...state.tasks];
            deleteTask.splice(action.payload,1);
            state={
                ...state,
                tasks:deleteTask
            };
    }
    return state
}