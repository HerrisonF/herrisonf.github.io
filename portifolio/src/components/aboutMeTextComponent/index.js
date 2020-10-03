import React from 'react';
import { Row, Container } from 'react-bootstrap';
import './style.scss';

const AboutMeText = () => {
    return (
        <Container>
            <Row>
            <span className="text-green">Desenvolvedor Mobile e aspirante à outras tecnologias de Front e Backend. Pretendo fazer a diferença por meio das minhas soluções criativas. </span>   
            </Row>
            <Row>
                <p>Olá, minha experiência como desenvolvedor iniciou-se em Delphi, presencial e Home-Office na área de automação Fiscal e refatoração. Mas atualmente, minhas atenção se voltam ao desenvolvimento Mobile. </p>
                <p>Alguns de meus conhecimentos: Desenvolvimento Back-end e Front-End; Programação MVC,MVP e MVVM; Utilização de práticas Clean Code; Conhecimento de Git Flow, SQL, Noções de Padrões de Projeto, Flutter, Ionic, Docker, Kubernetes, React, SCRUM, JIRA, produtos Oracle e AWS.</p>
                <p>Alguns projetos em que participei: Automação de comércios(Delphi, Desktop), Aplicativo Meu Técnico(Claro, Mobile), Portal LGPD(Claro, React), Migração do regionalizador da OI(OI, Oracle Infrastructure Cloud), Integração CIP(CIP, Oracle Cloud) entre outros.</p>
                <p>Apesar da experiência em outras áreas, tenho gosto pela plataforma mobile. Minhas metas para o futuro: Conhecer melhor sobre a inteligência artificial e continuar melhorando meu conhecimento em mobile. </p>
            </Row>
        </Container>  
    );
}

export default AboutMeText;