import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ProgressBar from '../progressBarComponent';
import './style.scss';

const LaunguagesComponent = () => {
    return (
        <Row className="language_container">
            <div>
                <span className="language_text">Idiomas</span>
            </div>
            <Col>
                <div>
                    <img
                        alt="English United States Flag"
                        src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg" width="50" height="50"/>
                </div>
                <div>
                    <span className="language_text">Inglês</span>
                </div>
                <div>
                    <ProgressBar percent={70}/>
                </div>
            </Col>
            <Col>
                <div className="background_japanese_flag">
                    <img
                        alt="Japanese Flag"
                        src="http://purecatamphetamine.github.io/country-flag-icons/3x2/JP.svg" width="50" height="50" />
                </div>
                <div>
                    <span className="language_text">Japonês</span>
                </div>
                <div>
                    <ProgressBar percent={5}/>
                </div>
            </Col>
        </Row>
    );
};

export default LaunguagesComponent;