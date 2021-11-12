import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './style.scss';
import MainSkillCardsComponent from '../../components/mainSkillCardsComponent';
import SecondarySkillCardsComponent from '../../components/secondarySkillCardsComponent';
import LanguagesComponent from '../../components/languagesComponent';

const HeaderAboutMeTitleComponent = () => {
    return (
        <Row>
            <Col xs={12} sm={12} md={6} lg={6} className="about_me_container">
                <Row>
                    <p className="about_me_content_text">Iniciei minha carreira como Desenvolvedor Delphi com automação e refatoração e vivências em Backend. Mas meu foco atual é a especialização na plataforma Mobile. </p>
                    <p className="about_me_content_text">Alguns de meus conhecimentos: React; Programação MVC, MVP e MVVM; Práticas Clean Code; Git/Flow, SCRUM, JIRA.</p>
                    <p className="about_me_content_text">Alguns projetos em que participei: <br/> - Supermercado Mambo Delivery (L.T, Flutter). <br/> - Aplicativo Meu Técnico(Claro, Android). <br/> - Portal LGPD(Claro, React)  <br/> - Migração do regionalizador da OI(OI, Oracle Infrastructure Cloud) <br/> - Integração CIP(CIP, Oracle Cloud) <br/> - Automação de comércios(Delphi, Desktop) entre outros.</p>
                    <p className="about_me_content_text #destaque">Apesar da experiência em outras áreas, minha preferência e maior domínio é na plataforma mobile. Minha perspectiva é o aprimoramento do meu conhecimento em mobile, jogos e UX/UI. </p>
                </Row>
            </Col>  
            <Col xs={12} sm={12} md={6} lg={6}>
                <MainSkillCardsComponent />
                <SecondarySkillCardsComponent />
                <LanguagesComponent />
            </Col>
        </Row>
    );
}

export default HeaderAboutMeTitleComponent;