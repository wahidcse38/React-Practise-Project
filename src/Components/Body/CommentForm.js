import React, { Component } from "react";
import { Form, Input, Button } from 'reactstrap';



class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: "",
            rating: "",
            comment: "",
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit = (event) => {
        this.props.addComment(this.props.dishId, this.state.author, this.state.rating, this.state.comment);

        this.setState({
            author: "",
            rating: "",
            comment: "",
        })

        event.preventDefault();
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Input
                        type="text"
                        name="author"
                        placeholder="Name"
                        value={this.state.author}
                        onChange={this.handleInputChange}
                        required />
                    <br />
                    <Input
                        type="select"
                        name="rating"
                        value={this.state.rating}
                        onChange={this.handleInputChange}
                        required
                    >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                    <br />
                    <Input
                        type="textarea"
                        name="comment"
                        placeholder="Comment"
                        value={this.state.comment}
                        onChange={this.handleInputChange}
                        required />
                    <br />
                    <Button type="submit">Submit comment</Button>
                </Form>
            </div>
        )
    }
}
export default CommentForm;