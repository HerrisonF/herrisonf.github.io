import React from 'react';
import { Row } from 'react-bootstrap';
import './style.scss';


const TextBoxSection = ({text}) => {
    return (
        <Row className="about-me-text">
            {text}
        </Row>
    );
}

export default TextBoxSection;