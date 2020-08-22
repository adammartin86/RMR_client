import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button
} from 'reactstrap';

const BuildTable = (props) => {
    const deleteBuild = (build) => {
        fetch(`http://localhost:3000/build/delete/${build.id}`, {
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
                        <CardImg top width="100%" src={build.url} alt="Card image cap" />
                        <CardBody>
                            <CardTitle></CardTitle>
                            <CardText>Motherboard: {build.motherboard}, CPU: {build.cpu}, GPU: {build.gpu}, RAM: {build.ram}, Case: {build.pc_case},</CardText>
                            <Button color="warning" onClick={() => { props.editUpdateBuild(build); props.updateOn() }} >Update specs</Button>
                            &nbsp;
                         <Button color="danger" onClick={() => deleteBuild(build)}>Delete Rig</Button>
                        </CardBody>
                    </Card>
                </div>
            )
        })
    }
    return (
        <>
        <Button className="right-align" color="primary" onClick={() => { props.createOn() }} >Build your rig!</Button>
            <h3>User Builds</h3>
            <hr />
            {buildMapper()}

        </>
    );
}

export default BuildTable;