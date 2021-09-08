
import { combineReducers } from 'redux';
import { initContactForm } from './forms';
import { createForms } from 'react-redux-form';
import * as actionTypes from './actionTypes';


// DISHES REDUCER
const dishReducer = (dishState = { isLoading: false, dishes: [], errorMsg: null }, action) => {
    switch (action.type) {
        case actionTypes.DISHES_LOADING:
            return {
                ...dishState,
                isLoading: true,
                dishes: [],
                errorMsg: null
            }
        case actionTypes.LOAD_DISHES:
            return {
                ...dishState,
                isLoading: false,
                dishes: action.payload,
                errorMsg: null
            }
        case actionTypes.DISHES_FAILED:
            return {
                ...dishState,
                isLoading: false,
                errorMsg: action.payload
            }
        default:
            return dishState;
    }
}

//COMMENT REDUCER

const commentReducer = (commentState = { isLoading: true, comments: [] }, action) => {
    //console.log(action);
    switch (action.type) {
        case actionTypes.LOAD_COMMENTS:
            return {
                ...commentState,
                isLoading: false,
                comments: action.payload,

            }
        case actionTypes.COMMENT_LOADING:
            return {
                ...commentState,
                isLoading: true,
                comments: [],

            }
        case actionTypes.ADD_COMMENT:
            let comment = action.payload;
            return {
                ...commentState,
                isLoading: false,
                comments: commentState.comments.concat(comment)
            }
        default:
            return commentState;
    }
}

const Reducer = combineReducers({
    dishes: dishReducer,
    comments: commentReducer,
    ...createForms({
        feedback: initContactForm
    })
})
export default Reducer;