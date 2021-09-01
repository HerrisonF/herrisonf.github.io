import React from 'react';
import { Row, Col, Button} from 'react-bootstrap';
import foto from './../../assets/foto.png';
import { SiLinkedin, SiGithub, SiReadthedocs, SiYoutube } from 'react-icons/si';
import './style.scss';
import pdfFile from './../../assets/curriculo_2021_08.pdf'

const HeaderImage = () => {
    
    const handlePrintPDF = (event) => {
        event.preventDefault();
        window.open(pdfFile, "PRINT");
      };

    return (
        <Row className="head">
            <Col xs={6} md={4}>
                <img src={foto} className="image-formatter" alt="Imagem pessoal, Herrison"/>
            </Col>
            <Col xs={12} md={8} className="text-principal-info"> 
                    <div className="white-text-name">Herrison Féres</div>
                    <div className="text-job"> Analista de Sistemas / Desenvolvedor Mobile Senior</div>
                    <div className="personal-info">
                        <div><span className="text-description">{(new Date().getFullYear() - 1997)}</span><span className="text"> anos</span></div>
                        <div><span className="text-description">São José do Rio Preto,São Paulo</span></div>
                        <div><span className="text-description">HerrisonF_nascimento@hotmail.com</span></div>
                    </div>
                    <Row className="icons-config">
                        <a href="https://www.linkedin.com/in/herrison-f%C3%A9res-423023103/"> 
                            <SiLinkedin className="linkedin-icon" />
                        </a>
                        <a href="https://github.com/HerrisonF">
                            <SiGithub className="github-icon"/>
                        </a>
                        <a href="https://www.youtube.com/channel/UCDB8iUDSics-TeiscSknL4A">
                            <SiYoutube className="youtube-icon" />
                        </a>
                        <Button className="curriculo-button" onClick={(e) => handlePrintPDF(e)} href="null">
                            <SiReadthedocs className="curriculum-icon" /> <span className="text-description">Currículo</span>
                        </Button>
                    </Row>
            </Col>
        </Row>
    );
}

export default HeaderImage;