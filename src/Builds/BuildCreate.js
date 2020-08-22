import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalBody, ModalHeader } from 'reactstrap';

const BuildCreate = (props) => {
    const [motherboard, setMotherboard] = useState('');
    const [cpu, setCpu] = useState('');
    const [gpu, setGpu] = useState('');
    const [ram, setRam] = useState('');
    const [pc_case, setPc_case] = useState('');
    const [url, setUrl] =useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(props.token);
        fetch('http://localhost:3000/build/create', {
            method: 'POST',
            body: JSON.stringify({ build: { motherboard: motherboard, cpu: cpu, gpu: gpu, ram: ram, pc_case: pc_case, url: url } }),
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
                setUrl('');
                props.fetchBuilds();
                props.createOff();
            })
    }


    return (
        <>
         <Modal isOpen={true}>
            <ModalHeader>Build your Rig!</ModalHeader>
            <ModalBody>
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
                <FormGroup>
                    <Label htmlFor="url"/>
                    <Input placeholder="URL" name="url" value={url} onChange={(e) => setUrl(e.target.value)}/>
                </FormGroup>
                <Button type="submit">Build your rig!</Button>
            </Form>
            </ModalBody>
        </Modal>
        </>
    );
}

export default BuildCreate;