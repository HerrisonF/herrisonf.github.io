import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './style.scss';


const TextBoxSection = ({text}) => {
    return (
        <Row className="about-me-text">
            {text}
        </Row>
    );
}

export default TextBoxSection;