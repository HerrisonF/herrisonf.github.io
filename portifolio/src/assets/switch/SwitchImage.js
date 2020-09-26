import Image1 from '../foto.jpeg';
import Image2 from '../background_image.png';
import { Card } from 'react-bootstrap';
import React from 'react';

import './style.scss';

const SwitchImage = ({ id, type }) => {
    switch (id) {
        case 1:
            return (
                    type ?
                    <Card.Img variant="top" src="http://lorempixel.com/output/cats-q-c-640-480-4.jpg" /> : 
                    <img
                    className="d-block w-100"
                    src="http://lorempixel.com/output/cats-q-c-640-480-4.jpg"
                    alt="First slide"
                    />
                    
            )
        case 2: 
            return (
                type ?
                <Card.Img variant="top" src="http://lorempixel.com/output/cats-q-c-640-480-4.jpg" /> :
                    <img
                        className="d-block w-100"
                        src="http://lorempixel.com/output/cats-q-c-640-480-5.jpg"
                        alt="First slide"
                        />
            )
        case 3: 
            return (
                type ?
                <Card.Img variant="top" src="http://lorempixel.com/output/cats-q-c-640-480-4.jpg" /> :
                    <img
                        className="d-block w-100"
                        src={Image2}
                        alt="First slide"
                        />
            )
        case 4: 
            return (
                type ?
                <Card.Img variant="top" src="http://lorempixel.com/output/cats-q-c-640-480-4.jpg" /> :
                    <img
                        className="d-block w-100"
                        src={Image1}
                        alt="First slide"
                        />
            )
        default: 
            return(
                type ?
                <Card.Img variant="top" src="http://lorempixel.com/output/cats-q-c-640-480-4.jpg" /> : <img
                    className="d-block w-100"
                    src={Image2}
                    alt="First slide"
                    /> 
            )
    }
}

export default SwitchImage;