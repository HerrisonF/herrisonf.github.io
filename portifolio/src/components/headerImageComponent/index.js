import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import foto from './../../images/foto.jpeg';
import './style.scss';

const HeaderImage = () => {
    return (
        <Row className="margin">
            <Col xs={6} md={6}>
                <div id="fachada">
                    <div className="telhado"/>
                </div>
                <div>
                    <img src={foto} className="image-formatter" alt="Imagem pessoal, Herrison"/>
                </div>
            </Col>
            <Col xs={6} md={6} className="text-principal-info"> 
                <Row>Olá, sou <span className="white-text-name">Herrison Féres</span></Row>
                <Row className="white-text-job"> Analista de sistemas </Row>
                <Row><span className="text">Idade:</span>23 Anos</Row>
                <Row><span className="text">Endereço:</span>São José do Rio Preto,São Paulo</Row>
                <Row><span className="text">E-mail:</span>HerrisonF_nascimento@hotmail.com</Row>
                <Row><span className="text">Telefone:</span>17 9 9642-0598</Row>
                <Row className="ajust-button">
                    <Button className="button-cv">Baixar CV</Button>
                </Row> 
            </Col>
        </Row>
    );
}

export default HeaderImage;