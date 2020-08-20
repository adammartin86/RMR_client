import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Tab, Tabs } from 'react-bootstrap';
import Signup from './Signup';
import Login from './Login';

const Auth = (props) => {
    return (

        <Container className="auth-container">
            <Row>
                <Col md="6">
                    <Tabs>
                        <Tab eventKey="signup" title="Sign Up">
                            <Signup updateToken={props.updateToken} />
                        </Tab>
                        <Tab eventKey="login" title="Login">
                            <Login updateToken={props.updateToken} />
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </Container>
    );
}

export default Auth;