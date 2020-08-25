import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';
import APIURL from '../helpers/environment';

const BuildEdit = (props) => {
    const [editMotherboard, setMotherboardEdit] = useState(props.buildToUpdate.motherboard);
    const [editCpu, setCpuEdit] = useState(props.buildToUpdate.cpu);
    const [editGpu, setGpuEdit] = useState(props.buildToUpdate.gpu);
    const [editRam, setRamEdit] = useState(props.buildToUpdate.ram);
    const [editPc_case, setPc_caseEdit] = useState(props.buildToUpdate.pc_case);
    const [editUrl, setUrl] = useState(props.buildToUpdate.url);

    const buildUpdate = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/build/update/${props.buildToUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify({ build: { motherboard: editMotherboard, cpu: editCpu, gpu: editGpu, ram: editRam, pc_case: editPc_case, url: editUrl } }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then((res) => {
            return res.json();
        }).then((json) =>{
            console.log(json);    
            props.fetchBuilds();
            props.updateOff();
        })
    }
    return (
        <Modal isOpen={true}>
            <ModalHeader>Edit your Rig</ModalHeader>
            <ModalBody>
                <Form onSubmit={buildUpdate}>
                    <FormGroup>
                        <Label htmlFor="motherboard">Edit Motherboard:</Label>
                        <Input name="result" value={editMotherboard} onChange={(e) => setMotherboardEdit(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="cpu">Edit CPU:</Label>
                        <Input name="cpu" value={editCpu} onChange={(e) => setCpuEdit(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="gpu">Edit GPU:</Label>
                        <Input name="gpu" value={editGpu} onChange={(e) => setGpuEdit(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="ram">Edit RAM"</Label>
                        <Input name="ram" value={editRam} onChange={(e) => setRamEdit(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="pc_case">Edit Case</Label>
                        <Input name="pc_case" value={editPc_case} onChange={(e) => setPc_caseEdit(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="url">Edit Image</Label>
                        <Input name="url" value={editUrl} onChange={(e) => setUrl(e.target.value)}/>
                    </FormGroup>
                    <Button type="submit">Update Specs!</Button>
                </Form>
            </ModalBody>
        </Modal>
    );
}

export default BuildEdit;