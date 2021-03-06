import React from "react";
import dateFormat from "dateformat";
import Loading from "./Loading";

const LoadComments = (props) => {
    if (props.isLoading) {
        return <Loading />
    }
    else {
        return (
            props.comments.map(comment => {
                return (
                    <div key={comment.id}>
                        <h3>{comment.author}</h3>
                        <p>Rating : {comment.rating}</p>
                        <p>{comment.comment}</p>
                        <p>{dateFormat(comment.date, "dddd, mmmm dS, yyyy, h:MM TT")}</p>
                    </div>
                )
            })
        )
    }
}
export default LoadComments;