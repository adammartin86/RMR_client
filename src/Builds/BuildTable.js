import React from 'react';
import {Table, Button} from 'reactstrap';

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
    const buildMapper =() => {
        return props.build.map((build, index) =>{
            return(
                <tr key={index}>
                    <th scope="row">{build.id}</th>
                    <td>{build.motherboard}</td>
                    <td>{build.cpu}</td>
                    <td>{build.gpu}</td>
                    <td>{build.ram}</td>
                    <td>{build.pc_case}</td>
                    <td>
                        <Button color="warning" onClick={() => {props.editUpdateBuild(build); props.updateOn()}} >Update specs</Button>
                        <Button color="danger" onClick={()=> deleteBuild(build)}>Delete Rig</Button>
                    </td>
                </tr>
            )
        })
    }
    return ( 
        <>
        <h3>User Builds</h3>
        <hr/>
        <Table striped>
            <thead>
                <tr>
                    <th>User</th>
                    <th>Motherboard</th>
                    <th>CPU</th>
                    <th>GPU</th>
                    <th>RAM</th>
                    <th>Case</th>
                </tr>
            </thead>
            <tbody>
                {buildMapper()}
            </tbody>
        </Table>
        </>
     );
}
 
export default BuildTable;