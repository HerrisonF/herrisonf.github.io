import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import TextBoxSectionComponent from '../../components/textBoxSectionComponent';
import { GiDiceSixFacesSix } from "react-icons/gi";
import { FaMoneyBillWave, FaBookOpen, FaBook, FaUtensils, FaUserNinja } from "react-icons/fa";

import './style.scss';

const InterestPage = () => {
    return(
        <Container>
            <TextBoxSectionComponent text="Interesses"/>
            <Row className="interest-cards-space">
                <Col className="space-cards">
                    <Flippy
                    flipOnHover={true}
                    flipDirection="horizontal"
                    className="card-formatter" /// these are optional style, it is not necessary
                    >
                        <FrontSide className="inside-card-formatter">
                            < FaMoneyBillWave className="icon-formatter"/>
                            <div className="text-formatter">Investimento</div>
                        </FrontSide>
                        <BackSide className="inside-card-formatter">
                            <div className="text-formatter-back"> O preço importa. </div>
                        </BackSide>
                    </Flippy>
                </Col>
                <Col className="space-cards">
                    <Flippy
                    flipOnHover={true}
                    flipDirection="horizontal"
                    className="card-formatter" /// these are optional style, it is not necessary
                    >
                        <FrontSide className="inside-card-formatter">
                            < GiDiceSixFacesSix className="icon-formatter"/>
                            <div className="text-formatter">Jogos</div>
                        </FrontSide>
                        <BackSide className="inside-card-formatter">
                            <div className="text-formatter-back">Preferência pelo estilo Souls Like.</div>
                        </BackSide>
                    </Flippy>
                </Col>
                <Col className="space-cards">
                    <Flippy
                    flipOnHover={true}
                    flipDirection="horizontal"
                    className="card-formatter" /// these are optional style, it is not necessary
                    >
                        <FrontSide className="inside-card-formatter">
                            < FaBookOpen className="icon-formatter"/>
                            <div className="text-formatter">Leitura</div>
                        </FrontSide>
                        <BackSide className="inside-card-formatter">
                            <div className="text-formatter-back"> Só quando não estou com dor de cabeça. </div>
                        </BackSide>
                    </Flippy>
                </Col>
                <Col className="space-cards">
                    <Flippy
                    flipOnHover={true}
                    flipDirection="horizontal"
                    className="card-formatter" /// these are optional style, it is not necessary
                    >
                        <FrontSide className="inside-card-formatter">
                            < FaBook className="icon-formatter"/>
                            <div className="text-formatter">Estudos</div>
                        </FrontSide>
                        <BackSide className="inside-card-formatter">
                            <div className="text-formatter-back"> As vezes chato, as vezes não </div>
                        </BackSide>
                    </Flippy>
                </Col>
                <Col className="space-cards">
                    <Flippy
                    flipOnHover={true}
                    flipDirection="horizontal"
                    className="card-formatter" /// these are optional style, it is not necessary
                    >
                        <FrontSide className="inside-card-formatter">
                            < FaUtensils className="icon-formatter"/>
                            <div className="text-formatter">Pratos</div>
                        </FrontSide>
                        <BackSide className="inside-card-formatter">
                            <div className="text-formatter-back"> Coxinha e Açai sempre. </div>
                        </BackSide>
                    </Flippy>
                </Col>
                <Col className="space-cards">
                    <Flippy
                    flipOnHover={true}
                    flipDirection="horizontal"
                    className="card-formatter" /// these are optional style, it is not necessary
                    >
                        <FrontSide className="inside-card-formatter">
                            < FaUserNinja className="icon-formatter"/>
                            <div className="text-formatter">Jiu-Jitsu</div>
                        </FrontSide>
                        <BackSide className="inside-card-formatter">
                            <div className="text-formatter-back"> "Semana não acaba !" </div>
                        </BackSide>
                    </Flippy>
                </Col>
            </Row>
        </Container>
    );
};

export default InterestPage;