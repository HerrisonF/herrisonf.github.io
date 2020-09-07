import React from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import BackButtonComponent from '../../components/backButtonComponent';
import foto from './../../images/foto.jpeg';
import './style.scss';

const AboutPage = () => {
    return (
        <Container>
            <BackButtonComponent />
            <Row>Sobre mim</Row>
            <Row>
                <Col xs={6} md={6}>
                    <img className="image-formatter" src={foto} alt="Foto Pessoal Herrison"/>
                </Col>
                <Col xs={6} md={6}> 
                    <Row>Olá, sou Herrison Féres</Row>
                    <Row> Analista de sistemas </Row>
                    <Row>Idade: 23 Anos</Row>
                    <Row>Endereço: São José do Rio Preto,São Paulo</Row>
                    <Row>E-mail: HerrisonF_nascimento@hotmail.com</Row>
                    <Row>Telefone: 17 9 9642-0598</Row>
                    <Row><Button>Baixar CV</Button><Button className="margin-buttons">Me contrate</Button></Row> 
                </Col>
            </Row>
        </Container>
    );
};

export default AboutPage;