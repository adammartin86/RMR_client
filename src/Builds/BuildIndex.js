import React, { useState, useEffect } from 'react';
import { Container, Row, Col} from 'reactstrap';
import BuildCreate from './BuildCreate';
import BuildTable from './BuildTable';
import BuildEdit from './BuildEdit';
import APIURL from '../helpers/environment';

const BuildIndex = (props) => {
    const [build, setBuild] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [buildToUpdate, setBuildToUpdate] = useState({});
    const [createActive, setCreateActive] = useState(false);

    const fetchBuilds = () => {
        fetch(`${APIURL}/build/`, {
            method: 'GET',
            headers: new Headers({
                'Content-type': 'application/json',
                'Authorization': props.token
            })
        }).then((res) => res.json())
            .then((logData) => {
                setBuild(logData)
                console.log(logData)
            })
    }
    const editUpdateBuild = (build) => {
        setBuildToUpdate(build);
        console.log(build);
    }
    const updateOn = () => {
        setUpdateActive(true);
    }
    const updateOff = () => {
        setUpdateActive(false);
    }

    const createOn = () => {
        setCreateActive(true);
    }
    const createOff = () => {
        setCreateActive(false);
    }
    useEffect(() => {
        fetchBuilds();
    }, [])


    return (
        <div>
            <Container>
                <Row>
                    <Col md="4"></Col>
                    <Col md="6">
                        
                        <BuildTable className="build-table" build={build} editUpdateBuild={editUpdateBuild} updateOn={updateOn} createOn={createOn} fetchBuilds={fetchBuilds} token={props.token} />
                    </Col>
                    
                    {updateActive ? <BuildEdit buildToUpdate={buildToUpdate} updateOff={updateOff} token={props.token} fetchBuilds={fetchBuilds} /> : <></>}
                    {createActive ? <BuildCreate createOff={createOff} token={props.token} fetchBuilds={fetchBuilds} /> : <></>}
                </Row>
            </Container>
        </div>
    );
}

export default BuildIndex;