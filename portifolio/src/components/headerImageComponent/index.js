import React from 'react';
import { Row, Col} from 'react-bootstrap';
import foto from './../../assets/foto.jpeg';
import './style.scss';

const HeaderImage = () => {
    return (
        <Row className="head">
            <Col xs={6} md={6}>
                <img src={foto} className="image-formatter" alt="Imagem pessoal, Herrison"/>
            </Col>
            <Col xs={12} md={6} className="text-principal-info"> 
                <Row>Olá, sou <span className="white-text-name">Herrison Féres</span></Row>
                <Row className="white-text-job"> Analista de sistemas </Row>
                <Row><span className="text">Idade:</span>{(new Date().getFullYear() - 1997)}</Row>
                <Row><span className="text">Endereço:</span>São José do Rio Preto,São Paulo</Row>
                <Row><span className="text">E-mail:</span>HerrisonF_nascimento@hotmail.com</Row> 
            </Col>
        </Row>
    );
}

export default HeaderImage;