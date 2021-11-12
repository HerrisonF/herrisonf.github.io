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
                    <p className="about_me_content_text">Iniciei minha carreira como Desenvolvedor Delphi com automação e refatoração. Atualmente trabalho no desenvolvimento Mobile. </p>
                    <p className="about_me_content_text">Alguns de meus conhecimentos: Vicência no Back-end, Front-End(WEB) - Docker, Kubernetes e React; Programação MVC, MVP e MVVM; Práticas Clean Code; Git/Flow, SQL, SCRUM, JIRA, produtos Oracle e AWS.</p>
                    <p className="about_me_content_text">Alguns projetos em que participei: Supermercado Mambo Delivery (L.T, Flutter), Automação de comércios(Delphi, Desktop), Aplicativo Meu Técnico(Claro, Android), Portal LGPD(Claro, React), Migração do regionalizador da OI(OI, Oracle Infrastructure Cloud), Integração CIP(CIP, Oracle Cloud) entre outros.</p>
                    <p className="about_me_content_text #destaque">Apesar da experiência em outras áreas, tenho preferência e maior domínio na plataforma mobile. Minha perspectiva é o aprimoramento do meu conhecimento em mobile, jogos e UX/UI. </p>
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