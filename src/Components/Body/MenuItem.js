import React from 'react';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';

const MenuItem = (props) => {
    return (
        <div>
            <Card className="m-2" color="dark">
                <CardBody>
                    <CardImg width="100%" alt={props.dish.name} src={props.dish.image} />
                    <CardTitle
                        onClick={props.onDishSelect}
                        style={{ cursor: "pointer", color: "#fff", fontSize: "20px", textAlign: "center" }}>
                        {props.dish.name}
                    </CardTitle>
                </CardBody>
            </Card>
        </div>
    )
}
export default MenuItem