import React from 'react';
import { Row } from 'react-bootstrap';
import './style.scss';


const TextBoxSection = ({text}) => {
    return (
        <Row className="section_text">
            {text}
        </Row>
    );
}

export default TextBoxSection;