import * as actionTypes from './actionTypes';
import axios from 'axios';
import { baseUrl } from './baseUrl';


export const addComment = (dishId, author, rating, comment) => {
    return ((dispatch) => {
        let newComment = {
            dishId: dishId,
            author: author,
            rating: rating,
            comment: comment
        }
        newComment.date = new Date().toISOString;

        axios.post(baseUrl + "comments", newComment)
            .then(response => response.data)
            .then(comment => dispatch(commentConcat(comment)))
    })

}

// ADD COMMENT ACTION

export const commentConcat = (comment) => {
    return {
        type: actionTypes.ADD_COMMENT,
        payload: comment
    }
}

// ACTION FOR COMMENTS
const commentLoading = () => {
    return {
        type: actionTypes.COMMENT_LOADING
    }
}

const loadComments = (comment) => {
    return {
        type: actionTypes.LOAD_COMMENTS,
        payload: comment
    }
}

export const fetchComments = () => {
    return ((dispatch) => {
        dispatch(commentLoading())

        axios.get(baseUrl + "comments")
            .then(response => response.data)
            .then(data => dispatch(loadComments(data)))
    })
}

// ACTION FOR DISHES
const loadDishes = dishes => {
    return {
        type: actionTypes.LOAD_DISHES,
        payload: dishes,
    }
}
const dishesLoading = () => {
    return {
        type: actionTypes.DISHES_LOADING
    }
}

const dishesFailed = (errorMsg) => {
    return {
        type: actionTypes.DISHES_FAILED,
        payload: errorMsg
    }
}

export const fetchDishes = () => {
    return ((dispatch) => {

        axios.get(baseUrl + "dishes")
            .then(response => response.data)
            .then(dishes => dispatch(loadDishes(dishes)))
            .catch(errorMsg => dispatch(dishesFailed(errorMsg.message)))

        dispatch(dishesLoading())

    })
}