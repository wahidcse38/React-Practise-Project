import React, { Component } from 'react';
import { FormGroup, Label, Col, Button, Alert } from 'reactstrap';
import { Form, Control, Errors, actions } from 'react-redux-form';
import { connect } from 'react-redux';
import axios from 'axios';
import { baseUrl } from '../../Redux/baseUrl';


const mapDispatchToProps = dispatch => {
    return {
        resetFeedbackForms: () => dispatch(actions.reset("feedback"))
    }
}


const required = val => val && val.length;
const isNum = val => !isNaN(Number(val));
const validEmail = val => /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(val);

class Contact extends Component {
    state = {
        showAlert: false,
        alertMsg: null,
        alertType: null
    }

    handleSubmit = values => {
        axios.post(baseUrl + "feedback", values)
            .then(response => response.status)
            .then(status => {
                if (status === 201) {
                    this.setState({
                        showAlert: true,
                        alertMsg: "Submitted Successfully",
                        alertType: "success"
                    });
                    setTimeout(() => {
                        this.setState({
                            showAlert: false
                        })
                    }, 2000);
                }
            })
            .catch(err => {
                this.setState({
                    showAlert: true,
                    alertMsg: err.message,
                    alertType: "danger"
                });
                setTimeout(() => {
                    this.setState({
                        showAlert: false
                    })
                }, 2000);
            })
        this.props.resetFeedbackForms();
    }

    render() {
        document.title = "Contact";
        return (
            <div className="container">
                <div className="row row-content" style={{ paddingLeft: "20px", textAlign: "left" }}>
                    <div className="col-12">
                        <Alert isOpen={this.state.showAlert} color={this.state.alertType}>{this.state.alertMsg}</Alert>
                        <h3>Send Us Your Feedback</h3>
                    </div>
                    <div className="col-12 col-md-7" >
                        <Form model="feedback" onSubmit={values => this.handleSubmit(values)}>
                            <FormGroup row>
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control.text
                                        model=".firstname"
                                        name="firstname"
                                        placeholder="First Name"
                                        className="form-control"
                                        validators={{
                                            required,
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".firstname"
                                        show="touched"
                                        messages={{
                                            required: "Required"
                                        }}
                                    />
                                </Col>
                            </FormGroup>
                            <br />
                            <FormGroup row>
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Control.text
                                        model=".lastname"
                                        name="lastname"
                                        placeholder="Last Name"
                                        className="form-control"
                                        validators={{
                                            required,
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".lastname"
                                        show="touched"
                                        messages={{
                                            required: "Required"
                                        }}
                                    />
                                </Col>
                            </FormGroup>
                            <br />
                            <FormGroup row>
                                <Label htmlFor="telnum" md={2}>Phone</Label>
                                <Col md={10}>
                                    <Control.text
                                        model=".telnum"
                                        name="telnum"
                                        placeholder="Phone"
                                        className="form-control"
                                        validators={{
                                            required,
                                            isNum
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".telnum"
                                        show="touched"
                                        messages={{

                                            isNum: "Invalid Number"
                                        }}
                                    />
                                </Col>
                            </FormGroup>
                            <br />
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text
                                        model=".email"
                                        name="email"
                                        placeholder="Email"
                                        className="form-control"
                                        validators={{
                                            validEmail
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        messages={{
                                            validEmail: "Invalid Email"
                                        }}
                                    />
                                </Col>
                            </FormGroup>
                            <br />
                            <FormGroup row>
                                <Col md={{ size: 6, offset: 2 }}>
                                    <FormGroup check>
                                        <Label check>
                                            <Control.checkbox
                                                model=".agree"
                                                name="agree"
                                                className="form-check-input"
                                            />
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{ size: 3, offset: 1 }}>
                                    <Control.select
                                        model=".contactType"
                                        name="contactType"
                                        className="form-control"
                                    >
                                        <option>Mobile</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>
                            </FormGroup>
                            <br />
                            <FormGroup row>
                                <Label htmlFor="message" md={2} >Your feedback</Label>
                                <Col md={10}>
                                    <Control.textarea
                                        model=".message"
                                        name="message"
                                        rows="6"
                                        className="form-control"
                                        validators={{
                                            required,
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".message"
                                        show="touched"
                                        messages={{
                                            required: "Required"
                                        }}
                                    />
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
export default connect(null, mapDispatchToProps)(Contact);