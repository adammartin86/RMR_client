import React, { useState } from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import APIURL from '../helpers/environment';

const Signup = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    

    let handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/user/create`, {
            method: 'POST',
            body: JSON.stringify({user:{ username: username, password: password}}),
            headers: new Headers({
                'Content-type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            props.updateToken(data.sessionToken)
        })
    }

    return ( 
        <div>
            <h1>Sign Up</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input onChange={(e) => setUsername(e.target.value)} name="username" value={username} type="username" required/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input onChange={(e) => setPassword(e.target.value)} name="password" value={password} type="password" minLength="5"/>
                </FormGroup>
                <Button type="submit">Sign up</Button>
            </Form>
        </div>
     );
}
 
export default Signup;