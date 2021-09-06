import * as actionTypes from './actionTypes';
import DISHES from '../data/dishes';


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

        setTimeout(() => {
            dispatch(loadDishes(DISHES))
        }, 2000)

        dispatch(dishesLoading())

    })
}