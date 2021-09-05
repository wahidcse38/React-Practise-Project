import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Col, Button } from 'reactstrap';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            contactType: 'Mobile',
            message: '',

        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange = (event) => {
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value,
        })
    }

    handleSubmit = event => {
        console.log(this.state);
        event.preventDefault()
    }

    render() {
        return (
            <div className="container">
                <div className="row row-content" style={{ paddingLeft: "20px", textAlign: "left" }}>
                    <div className="col-12">
                        <h3>Send Us Your Feedback</h3>
                    </div>
                    <div className="col-12 col-md-7" >
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input type="text" name="firstname" placeholder="First Name" value={this.state.firstname} onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <br />
                            <FormGroup row>
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input type="text" name="lastname" placeholder="Last Name" value={this.state.lastname} onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <br />
                            <FormGroup row>
                                <Label htmlFor="telnum" md={2}>Phone</Label>
                                <Col md={10}>
                                    <Input type="text" name="telnum" placeholder="Phone" value={this.state.telnum} onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <br />
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <br />
                            <FormGroup row>
                                <Col md={{ size: 6, offset: 2 }}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" name="agree" checked={this.state.agree} onChange={this.handleInputChange} /><strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{ size: 3, offset: 1 }}>
                                    <Input type="select" name="contactType" value={this.state.contactType} onChange={this.handleInputChange}>
                                        <option>Mobile</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <br />
                            <FormGroup row>
                                <Label htmlFor="message" md={2} >Your feedback</Label>
                                <Col md={10}>
                                    <Input type="textarea" name="message" value={this.state.message} rows="6" onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <br />
                            <FormGroup row>
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type="submit" color="dark">Send Feedback</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}
export default Contact;