import React from 'react';
import { Row, Col} from 'react-bootstrap';
import foto from './../../assets/foto.png';
import { SiLinkedin, SiGithub, SiReadthedocs, SiYoutube } from 'react-icons/si';
import './style.scss';
import pdfFile from './../../assets/Curriculo_2021.pdf'

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
                    <div className="text-job"> Analista de Sistemas / Desenvolvedor Mobile </div>
                    <div className="personal-info">
                        <div><span className="text">Idade:</span><span className="text-description">{(new Date().getFullYear() - 1997)} </span></div>
                        <div><span className="text">End:</span><span className="text-description">São José do Rio Preto,São Paulo</span></div>
                        <div><span className="text">E-mail:</span><span className="text-description">HerrisonF_nascimento@hotmail.com</span></div>
                    </div>
                    <Row className="icons-config">
                        <a className="linkedin-icon" href="https://www.linkedin.com/in/herrison-f%C3%A9res-423023103/"> 
                            <SiLinkedin />
                        </a>
                        <a className="github-icon"  href="https://github.com/HerrisonF">
                            <SiGithub />
                        </a>
                        <a className="youtube-icon"  href="https://www.youtube.com/channel/UCWcJHypnsac0_E_YsOaFApA">
                            <SiYoutube />
                        </a>
                        <a className="curriculum-icon"  onClick={(e) => handlePrintPDF(e)} href="null">
                            <SiReadthedocs /> Currículo
                        </a>
                    </Row>
            </Col>
        </Row>
    );
}

export default HeaderImage;