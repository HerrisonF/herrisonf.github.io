import React from 'react';
import { Row, Container } from 'react-bootstrap';
import CardComponent from '../../components/cardComponent/index';

import './style.scss';

const SquarePage = () => {
    return (
        <Container id="card-row">
            <Row>
                <CardComponent header={'Primeiro'} title={'Primeiro titulo'} description={'Descrição'} color={'Primary'}/>
                <CardComponent header={'Segundo'} title={'Segundo titulo'} description={'Descrição'} color={'Success'}/>
                <CardComponent header={'Terceiro'} title={'Terceiro titulo'} description={'Descrição'} color={'Danger'}/>
                <CardComponent header={'Quarto'} title={'Quarto titulo'} description={'Descrição'} color={'Info'}/>
            </Row>
        </Container>
    );
};

export default SquarePage;