import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import dataSkills from '../../helper/data/skills.json';
import ProgressBar from '../../components/progressBarComponent';
import './style.scss';

const SkillComponent = () => {
    let skills = dataSkills; 
    return (
        <Container className="skillsBody" id="scrollStyle">
            <Row>
                <Col>
                    <Row className="subtitle-skill">Profissional</Row>
                    {
                        skills.skills[0].profissional.map(item => {
                            return (
                                <>
                                    <Row>
                                        <span className="label-skill">{item.label}</span>
                                    </Row>
                                    <Row>
                                        <ProgressBar percent={item.percent}/>
                                    </Row>
                                </>
                            )
                        })
                    }
                </Col>
                <Col>
                    <Row className="subtitle-skill">Pessoal</Row>
                    {
                        skills.skills[1].pessoal.map(item => {
                            return (
                                <>
                                <Row>
                                    <span className="label-skill">{item.label}</span>
                                </Row>
                                <Row>
                                    <ProgressBar percent={item.percent}/>
                                </Row>
                            </>
                            )
                        })
                    }
                </Col>
                <Col>
                    <Row className="subtitle-skill">Idiomas</Row>
                    {
                        skills.skills[2].idioma.map(item => {
                            return (
                                <>
                                    <Row>
                                        <span className="label-skill">{item.label}</span>
                                    </Row>
                                    <Row>
                                        <ProgressBar percent={item.percent}/>
                                    </Row>
                                </>
                            )
                        })
                    }
                </Col>
            </Row>
        </Container>
    );
};

export default SkillComponent;