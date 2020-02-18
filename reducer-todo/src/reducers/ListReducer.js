


export const initialState = [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589

}]

export const itemReducer = (state, action) => {
    switch (action.type) {
         case 'ADD_TODO':
             console.log(state);
             console.log(action);
             return [
                 ...state,
                {item: action.payload,
                id: Date.now(),
                completed: false}
             ];
            
         case 'TOGGLE_COMPLETE':
            console.log(state);
            console.log(action);
             return (
                 state.map(item=> {
                     if(item.id===action.payload)
                        return{...item, completed: !item.completed};
                     else
                         return{...item}
                     
                        
                 }))
         case 'CLEAR_COMPLETE':
            console.log(state);
            console.log(action);
             return (
                 state.filter(item)
                 ...state,
                 completed: true
             );       
         default:
             return state;   
    }
};


