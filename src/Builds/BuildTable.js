import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button
} from 'reactstrap';
import APIURL from '../helpers/environment';

const BuildTable = (props) => {
    const deleteBuild = (build) => {
        fetch(`${APIURL}/build/delete/${build.id}`, {
            method: "DELETE",
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
            .then(() => props.fetchBuilds())
    }
    const buildMapper = () => {
        return props.build.map((build) => {
            return (
                <div classname="card-table">
                    <Card top width="100%">
                        <CardImg top width="100%" top height="75%" src={build.url} alt="Card image cap" />
                        <CardBody>
                            <CardTitle></CardTitle>
                            <CardText>Motherboard: {build.motherboard}, CPU: {build.cpu}, GPU: {build.gpu}, RAM: {build.ram}, Case: {build.pc_case}</CardText>
                            <Button color="info" onClick={() => { props.editUpdateBuild(build); props.updateOn() }} >Update specs</Button>
                            &nbsp;
                         <Button color="danger" onClick={() => deleteBuild(build)}>Delete Rig</Button>
                        </CardBody>
                    </Card>
                </div>
            )
        })
    }
    return (
        <div className="user-builds" width="100%">
        <Button  className="right-align" style={{background: "#2900BC", fontFamily: "'OCR A Std', monospace"}} onClick={() => { props.createOn() }} >Build your rig!</Button>
            <h3 style={{color:"lightgreen", fontFamily: "'OCR A Std', monospace"}}>User Builds</h3>
            <hr />
            {buildMapper()}

        </div>
    );
}

export default BuildTable;