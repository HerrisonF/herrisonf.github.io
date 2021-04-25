import React from 'react';
import { Row, Container } from 'react-bootstrap';
import './style.scss';

const AboutMeText = () => {
    return (
        <Container className="format-aboutme">
            <Row>
                <span className="text-green">Desenvolvedor Mobile e aspirante à tecnologias como Flutter, Android, IOS. Pretendo fazer a diferença por meio das minhas soluções criativas. </span>   
            </Row>
            <Row>
                <p>Minha experiência com desenvolvimento profissional iniciou-se em Delphi na área de automação fiscal e refatoração. Atualmente, meu foco de carreira está sendo o desenvolvimento Mobile. </p>
                <p>Alguns de meus conhecimentos: Desenvolvimento Back-end e Front-End; Programação MVC, MVP e MVVM; Utilização de práticas Clean Code; Conhecimento de Git/Flow, SQL, Noções de Padrões de Projeto, Flutter, Docker, Kubernetes, React, SCRUM, JIRA, produtos Oracle e AWS.</p>
                <p>Alguns projetos em que participei: Automação de comércios(Delphi, Desktop), Aplicativo Meu Técnico(Claro, Mobile), Portal LGPD(Claro, React), Migração do regionalizador da OI(OI, Oracle Infrastructure Cloud), Integração CIP(CIP, Oracle Cloud) entre outros.</p>
                <p>Apesar da experiência em outras áreas, tenho preferência e maior domínio na plataforma mobile. Minha perspectiva para o futuro é o aprimoramento do meu conhecimento em mobile e Jogos. </p>
            </Row>
        </Container>  
    );
}

export default AboutMeText;