import React from 'react';
import { Card, CardImg, CardBody, CardImgOverlay, CardTitle } from 'reactstrap';

const MenuItem = (props) => {
    console.log(props)
    return (
        <div>
            <Card style={{ margin: "10px 0" }}>
                <CardBody>
                    <CardImg width="100%" alt={props.dish.name} src={props.dish.image} />
                    <CardTitle style={{ cursor: "pointer", textAlign: "center" }}>{props.dish.name}</CardTitle>
                </CardBody>
            </Card>
        </div>
    )
}
export default MenuItem