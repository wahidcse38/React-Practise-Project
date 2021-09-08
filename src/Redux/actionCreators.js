import * as actionTypes from './actionTypes';
import axios from 'axios';
import { baseUrl } from './baseUrl';


export const addComment = (dishId, author, rating, comment) => {
    return {
        type: actionTypes.ADD_COMMENT,
        payload: {
            dishId: dishId,
            author: author,
            rating: rating,
            comment: comment
        }
    }
}

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

export const fetchDishes = () => {
    return ((dispatch) => {

        axios.get(baseUrl + "dishes")
            .then(response => response.data)
            .then(dishes => dispatch(loadDishes(dishes)))

        dispatch(dishesLoading())

    })
}