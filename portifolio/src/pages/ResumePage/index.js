import React from 'react';
import { Container } from 'react-bootstrap';
import { BiBriefcase } from "react-icons/bi";
import { FaUserGraduate } from "react-icons/fa";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import TextBoxSectionComponent from '../../components/textBoxSectionComponent';

import './style.scss';

const ResumePage = () => {
    return(
        <Container className="margin-top-resume">
            <TextBoxSectionComponent text="Experiência"/>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="2018 - Atual"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<BiBriefcase />}
                >
                    <h3 className="vertical-timeline-element-title">Analista de Sistemas</h3>
                    <h4 className="vertical-timeline-element-subtitle">Accurate Software</h4>
                    <p>
                        Desenvolvimento Full Stack, GIT, SCRUM,
                        JIRA, Squads. Projetos: Claro (App Meu Técnico): Android, Ionic, padrão MVVM e Clouds MC(Oracle), AWS(Amazon).
                        Consultor Oracle (CIP) com uso do OIC(Oracle Integration Cloud) ; Migração back e front OI com do Oracle Cloud (OKE), Kubernetes, Docker; 
                        Claro (Portal LGPD) React, HTML, CSS;  
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2018 - 2018"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<BiBriefcase />}
                >
                    <h3 className="vertical-timeline-element-title">Desenvolvedor Junior</h3>
                    <h4 className="vertical-timeline-element-subtitle">HQ Softwares</h4>
                    <p>
                        Home Office - Análise de requisitos, Automação, MSS, Tortoise e uso da Linguagem Delphi.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2017 - 2018"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<BiBriefcase />}
                >
                    <h3 className="vertical-timeline-element-title">Estágio</h3>
                    <h4 className="vertical-timeline-element-subtitle">Formatto Sistemas</h4>
                    <p>
                        Delphi na área de automação fiscal. Programação MVC e POO. Utilização de práticas Clean Code. 
                        Conhecimento em Git Flow, SQL e ETL. Noções de padrões de projeto, .ini e dlls.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2006 - 2008"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<BiBriefcase />}
                >
                    <h3 className="vertical-timeline-element-title">Estágio</h3>
                    <h4 className="vertical-timeline-element-subtitle">Cadastrando WEB</h4>
                    <p>
                        Auxílio na formatação de sites, HTML, lojas virtuais, WordPress, Hospedagem de sites e transferências FTP. Também auxiliava na inserção de palavras chaves após mineração,
                        força na redundância das palavras chaves e cálculo de velocidade nas páginas.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2014 - 2015"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<BiBriefcase />}
                >
                    <h3 className="vertical-timeline-element-title">Almoxarife</h3>
                    <h4 className="vertical-timeline-element-subtitle">Tebarrot</h4>
                    <p>
                        Receber, despachar, controlar, armazenar e organizar mercadorias. Também reabastecia todos os setores da fábrica.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2016 - 2019"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<FaUserGraduate />}
                >
                    <h3 className="vertical-timeline-element-title">Instituto Federal de Educação, Ciência e Tecnologia de São Paulo</h3>
                    <h4 className="vertical-timeline-element-subtitle"> Analista de Sistemas</h4>
                    <p>
                        Graduação em Análise e desenvolvimento de sistemas.
                        Congressos em que participei: Cotesi, Arduino Day, Latinoware.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2015 - 2015"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<FaUserGraduate />}
                >
                    <h3 className="vertical-timeline-element-title">Objetiva cursos Profissionalizantes</h3>
                    <h4 className="vertical-timeline-element-subtitle">Gestão Empresarial</h4>
                    <p>
                        Módulos: Administração, Secretariado, Telemarketing, Administração de pessoal e Contabilidade.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2012 - 2013"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<FaUserGraduate />}
                >
                    <h3 className="vertical-timeline-element-title">Escola Técnica Estadual</h3>
                    <h4 className="vertical-timeline-element-subtitle">Técnico em Informática para Internet</h4>
                    <p>
                        Desenvolvimento dos conhecimentos para ingresso no ambiente de TI. Hospedagem de sites, HTML, CSS, Design, Hardware.
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </Container>
    );
};

export default ResumePage;