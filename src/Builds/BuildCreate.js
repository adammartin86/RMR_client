import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const BuildCreate = (props) => {
    const [motherboard, setMotherboard] = useState('');
    const [cpu, setCpu] = useState('');
    const [gpu, setGpu] = useState('');
    const [ram, setRam] = useState('');
    const [pc_case, setPc_case] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(props.token);
        fetch('http://localhost:3000/build/create', {
            method: 'POST',
            body: JSON.stringify({ build: { motherboard: motherboard, cpu: cpu, gpu: gpu, ram: ram, pc_case: pc_case } }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then((res) => res.json())
            .then((logData) => {
                console.log(logData);
                setMotherboard('');
                setCpu('');
                setGpu('');
                setRam('');
                setPc_case('')
                props.fetchBuilds();
            })
    }


    return (
        <>
            <h3>Share your specs!</h3>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="motherboard" />
                    <Input placeholder="Motherboard" name="motherboard" value={motherboard} onChange={(e) => setMotherboard(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="cpu" />
                    <Input placeholder="CPU" name="cpu" value={cpu} onChange={(e) => setCpu(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="gpu" />
                    <Input placeholder="GPU" name="gpu" value={gpu} onChange={(e) => setGpu(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="ram" />
                    <Input placeholder="RAM" name="ram" value={ram} onChange={(e) => setRam(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="pc_case" />
                    <Input placeholder="Case" name="pc_case" value={pc_case} onChange={(e) => setPc_case(e.target.value)} />
                </FormGroup>
                <Button type="submit">Build your rig!</Button>
            </Form>
        </>
    );
}

export default BuildCreate;