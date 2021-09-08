import React from 'react';
import LoadComments from './LoadComments';
import CommentForm from './CommentForm';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import { baseUrl } from '../../Redux/baseUrl';

const DishDetail = (props) => {
    return (
        <div>
            <Card style={{ margin: "10px 0" }}>
                <CardBody>
                    <CardImg width="100%" src={baseUrl + props.dish.image} alt={props.dish.name} />
                    <CardTitle style={{ fontWeight: "bold", fontSize: "30px" }}>{props.dish.name}</CardTitle>
                    <CardText  >{props.dish.description}</CardText>
                    <CardText>Price : {props.dish.price} /-</CardText>
                    <hr />
                    <LoadComments comments={props.comments} isLoading={props.isLoading} />
                    <hr />
                    <CommentForm dishId={props.dish.id} addComment={props.addComment} />
                </CardBody>
            </Card>
        </div>
    )
}
export default DishDetail;