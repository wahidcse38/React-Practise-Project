import * as actionTypes from './actionTypes';


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