import React, { useReducer } from 'react'

export const initialState = {
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
                 completed: !state.complete
             };
         case 'CLEAR_COMPLETE':
             return {
                 ...state,
                 completed: true
             };       
         default:
             return state;   
    }
};


