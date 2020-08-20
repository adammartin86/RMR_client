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
                <div>
                    <Card>
                        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardText>{build.motherboard},{build.cpu},{build.gpu}, {build.ram}, {build.pc_case} </CardText>
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