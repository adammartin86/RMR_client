import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Tab, Tabs } from 'react-bootstrap';
import Signup from './Signup';
import Login from './Login';


const Auth = (props) => {
    return (
        <div className="auth-container" style={{backgroundColor: "grey"}}>
            <Container >
                <Row>
                    <Col md="6">
                        <Tabs style={{ color: "lightblue" }}>
                            <Tab style={{ color: "lightgreen" }} eventKey="signup" title="Sign Up">
                                <Signup updateToken={props.updateToken} />
                            </Tab>
                            <Tab style={{ color: "lightgreen" }} eventKey="login" title="Login">
                                <Login updateToken={props.updateToken} />
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Auth;