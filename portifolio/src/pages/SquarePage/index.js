import React from 'react';
import { Container } from 'react-bootstrap';
import AboutPage from '../AboutPage';
import ResumePage from '../ResumePage';
import SliderPortifolio from '../../components/sliderPortifolio';
import InterestPage from '../InterestPage';

import './style.scss';

const SquarePage = () => {
    return (
        <Container>
            <AboutPage />
            <SliderPortifolio />
            <ResumePage />
            <InterestPage />
        </Container>
    );
};

export default SquarePage;