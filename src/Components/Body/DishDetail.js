import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

const DishDetail = (props) => {
    return (
        <div>
            <Card style={{ margin: "10px 0" }}>
                <CardBody>
                    <CardImg width="100%" src={props.dish.image} alt={props.dish.name} />
                    <CardTitle style={{ fontWeight: "bold" }}>{props.dish.name}</CardTitle>
                    <CardText  >{props.dish.description}</CardText>
                    <CardText>Price : {props.dish.price} /-</CardText>
                </CardBody>
            </Card>
        </div>
    )
}
export default DishDetail;