import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './style.scss';


const TextBoxSection = ({text}) => {
    return (
        <Container className="margin-text-top">
            <Row className="about-me-text">
                {text}
            </Row>
        </Container>
    );
}

export default TextBoxSection;