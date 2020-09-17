import Image1 from '../foto.jpeg';
import Image2 from '../background_image.png';
import React from 'react';

import './style.scss';

const SwitchImage = ({ id }) => {
    switch (id) {
        case '1':
            return (
                    <img
                        className="d-block w-100"
                        src="http://lorempixel.com/output/cats-q-c-640-480-4.jpg"
                        alt="First slide"
                        />
            )
        case '2': 
            return (
                    <img
                        className="d-block w-100"
                        src="http://lorempixel.com/output/cats-q-c-640-480-5.jpg"
                        alt="First slide"
                        />
            )
        case '3': 
            return (
                    <img
                        className="d-block w-100"
                        src={Image2}
                        alt="First slide"
                        />
            )
        case '4': 
            return (
                    <img
                        className="d-block w-100"
                        src={Image1}
                        alt="First slide"
                        />
            )
        default: 
            return(
                <div>
                    <img
                        className="teste"
                        src={Image2}
                        alt="First slide"
                        />
                </div>
            )
    }
}

export default SwitchImage;