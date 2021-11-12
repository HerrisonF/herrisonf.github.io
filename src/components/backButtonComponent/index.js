import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import { MdKeyboardBackspace } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import './style.scss';

const BackButtonComponent = () => {
    let navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    }
    return (
        <Col >
            <Row>
                <Button onClick={() => handleClick()} className="margin-button-back"><MdKeyboardBackspace/>Voltar</Button> 
            </Row>
        </Col>       
    );
};

export default BackButtonComponent;