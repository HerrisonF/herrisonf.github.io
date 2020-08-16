import React from 'react';

import { Card, Col } from 'react-bootstrap';
import './style.scss';

const CardComponent = ({header, title, description, color}) => {
    return (
        <Col sm="6">
            <Card className="quadro"
                bg={color.toLowerCase()}
                text={color.toLowerCase() === 'light' ? 'dark' : 'white'}
            >
                <Card.Header>{ header }</Card.Header>
                <Card.Body>
                    <Card.Title>{ title }</Card.Title>
                    <Card.Text>
                        { description }
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default CardComponent;