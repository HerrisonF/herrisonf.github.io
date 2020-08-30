import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { MdKeyboardBackspace } from 'react-icons/md';
import { useHistory } from 'react-router-dom';

const BackButtonComponent = () => {
    let history = useHistory();

    const handleClick = () => {
        history.push('/');
    }
    return (
        <Col>
            <Row>
                <h5 onClick={() => handleClick()}><MdKeyboardBackspace/>Voltar</h5> 
            </Row>
        </Col>       
    );
};

export default BackButtonComponent;