import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import './style.scss';

const CardComponent = ({header, description, color, route}) => {
    let history = useHistory();
    
    const handleClick = () => {
        history.push(route);
    }

    return (
            <Card className="quadro"
                bg={color.toLowerCase()}
                text={color.toLowerCase() === 'light' ? 'dark' : 'white'}
            >
                <Card.Header>{ header }</Card.Header>
                <Card.Body 
                    onClick={() => handleClick()}
                >
                    <Card.Text>
                        { description }
                    </Card.Text>
                </Card.Body>
            </Card>
    );
}

export default CardComponent;