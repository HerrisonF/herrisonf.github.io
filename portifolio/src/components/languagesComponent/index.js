import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ProgressBar from '../progressBarComponent';
import jpFlag from '../../assets/JP.png';
import usFlag from '../../assets/US.png';
import './style.scss';

const LaunguagesComponent = () => {
    return (
        <Row className="language_container">
            <div>
                <span className="language_text">Idiomas</span>
            </div>
            <Col xs={6} md={6} lg={6}>
                <div>
                    <img
                        alt="English United States Flag"
                        src={usFlag} width="65" height="45"/>
                </div>
                <div>
                    <span className="language_text">Inglês</span>
                </div>
                <div>
                    <ProgressBar percent={65}/>
                </div>
            </Col>
            <Col xs={6} md={6} lg={6}>
                <div className="background_japanese_flag">
                    <img
                        alt="Japanese Flag"
                        src={jpFlag} width="65" height="45" />
                </div>
                <div>
                    <span className="language_text">Japonês</span>
                </div>
                <div>
                    <ProgressBar percent={4}/>
                </div>
            </Col>
        </Row>
    );
};

export default LaunguagesComponent;