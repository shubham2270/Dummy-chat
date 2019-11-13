import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Account = () => (
    <div>
        {/* Change password */}
        <Form style={{ width: "30%", border: "2px solid grey", padding: "10px" }}>
            <h4>Change Password</h4>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>New Password</Form.Label>
                <Form.Control type="password" placeholder="New Password" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
    </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Update Password
  </Button>
        </Form>

        <br />

        {/* Reset password */}
        <Form style={{ width: "30%", border: "2px solid grey", padding: "10px" }}>
            <h4>Reset Password</h4>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="Email" placeholder="Email Address" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
    </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
                Reset My Password
  </Button>
        </Form>
    </div>
);
export default Account;