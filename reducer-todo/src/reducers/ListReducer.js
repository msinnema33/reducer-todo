import React, { useReducer } from 'react'

const initialState = {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
}


 export const itemReducer = (state, action) => {
     switch (action.type) {
         case 'ADD_TODO':
             return {
                 ...state,
                item: action.payload,
                id: Date.now(),
                completed: false
            };
         case 'TOGGLE_COMPLETE':
             return {
                 ...state,
                 complete: !state.complete
             };
         case 'CLEAR_COMPLETE':
             return {
                 ...state
             };       

         default:
             return state;   

     }
   
};


