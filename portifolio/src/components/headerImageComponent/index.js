import React from 'react';
import { Row, Col} from 'react-bootstrap';
import foto from './../../assets/foto.png';
import './style.scss';

const HeaderImage = () => {
    return (
        <Row className="head">
            <Col xs={6} md={4}>
                <img src={foto} className="image-formatter" alt="Imagem pessoal, Herrison"/>
            </Col>
            <Col xs={12} md={8} className="text-principal-info"> 
                    <div className="white-text-name">Herrison Féres</div>
                    <div className="white-text-job"> Analista de sistemas </div>
                    <div><span className="text">Idade:</span><span className="text-description">{(new Date().getFullYear() - 1997)} </span></div>
                    <div><span className="text">Endereço:</span><span className="text-description">São José do Rio Preto,São Paulo</span></div>
                    <div><span className="text">E-mail:</span><span className="text-description">HerrisonF_nascimento@hotmail.com</span></div>
            </Col>
        </Row>
    );
}

export default HeaderImage;