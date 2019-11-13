import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { Form, Button } from 'react-bootstrap';
import { withFirebase } from '../Firebase';

import * as ROUTES from '../../constants/routes';

const SignUpPage = () => (
    <div>
        <SignUpForm />
    </div>
);

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

class SignUpFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }
    onSubmit = event => {
        const { username, email, passwordOne } = this.state;
        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push(ROUTES.HOME);
            })
            .catch(error => {
                this.setState({ error });
            });
        event.preventDefault();
    }
    onChange = event => {
    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error,
        } = this.state;

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === '';

        return (
            <form onSubmit={this.onSubmit} style={{ width: "30%", border: "2px solid grey", padding: "10px" }}>
                <h4>SignUp</h4>
                <Form.Group controlId="formBasicEmail" >
                    <Form.Control name="username"
                        value={username}
                        onChange={this.onChange}
                        type="text"
                        placeholder="Full Name" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control
                        name="email"
                        value={email}
                        onChange={this.onChange}
                        type="text"
                        placeholder="Email Address" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control
                        name="passwordOne"
                        value={passwordOne}
                        onChange={this.onChange}
                        type="password"
                        placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control
                        name="passwordTwo"
                        value={passwordTwo}
                        onChange={this.onChange}
                        type="password"
                        placeholder="Confirm Password" />
                </Form.Group>



                <Button disabled={isInvalid} type="submit" variant="primary">Sign Up</Button>
                {error && <p>{error.message}</p>}
            </form>
        );
    }
}

const SignUpLink = () => (
    <p>
        Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
    </p>
);

// const SignUpForm = withRouter(withFirebase(SignUpFormBase));


const SignUpForm = compose(
    withRouter,
    withFirebase,
)(SignUpFormBase);

export default SignUpPage;
export { SignUpForm, SignUpLink };