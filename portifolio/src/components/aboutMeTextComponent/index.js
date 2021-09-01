import React from 'react';
import { Row, Container } from 'react-bootstrap';
import './style.scss';

const AboutMeText = () => {
    return (
        <Container className="format-aboutme">
            <Row>
                <span className="text-green">Desenvolvedor Mobile nas tecnologias: Flutter, Android e Java. Pretendo fazer a diferença por meio de conhecimentos avançados no ambiente mobile. </span>   
            </Row>
            <Row>
                <p>Iniciei minha carreira no desenvolvimento Delphi na área de automação fiscal e refatoração. Atualmente, meu foco é o desenvolvimento Mobile. </p>
                <p>Alguns de meus conhecimentos: Vicência no Back-end, Front-End(WEB) - Docker, Kubernetes e React; Programação MVC, MVP e MVVM; Práticas Clean Code; Git/Flow, SQL, Noções de Padrões de Projeto, SCRUM, JIRA, produtos Oracle e AWS.</p>
                <p>Alguns projetos em que participei: Supermercado Mambo Delivery (L.T, Flutter), Automação de comércios(Delphi, Desktop), Aplicativo Meu Técnico(Claro, Android), Portal LGPD(Claro, React), Migração do regionalizador da OI(OI, Oracle Infrastructure Cloud), Integração CIP(CIP, Oracle Cloud) entre outros.</p>
                <p>Apesar da experiência em outras áreas, tenho preferência e maior domínio na plataforma mobile. Minha perspectiva é o aprimoramento do meu conhecimento em mobile e Jogos. </p>
            </Row>
        </Container>  
    );
}

export default AboutMeText;