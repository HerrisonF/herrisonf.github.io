import React from 'react';
import { Row, Container } from 'react-bootstrap';
import CardComponent from '../../components/cardComponent/index';

import './style.scss';

const SquarePage = () => {
    return (
        <Container>
            <Row id="card-row">
                <CardComponent header={'Sobre mim'}  description={'Tecnologias que tenho preferência, skills e contato.'} color={'Primary'} route={'/sobre'}/>
                <CardComponent header={'Portifolio'} description={'Projetos desenvolvidos paralelamente ou em trabalho.'} color={'Success'} route={'/portifolio'}/>
                <CardComponent header={'Currículo'}  description={'Resumo em tópicos de minha trajetória profissional e acadêmica.'} color={'Danger'} route={'/curriculo'}/>
                <CardComponent header={'Blog'}  description={'Posts sobre algo que estou aprendendo ou lendo.'} color={'Info'} route={'/blog'}/>
            </Row>
        </Container>
    );
};

export default SquarePage;