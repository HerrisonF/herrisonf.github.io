import React from 'react';
import { Container } from 'react-bootstrap';
import AboutPage from '../AboutPage';
import ResumePage from '../ResumePage';
import SkillsPage from '../SkillsPage';
import SliderPortifolio from '../../components/sliderPortifolio';
import InterestPage from '../InterestPage';

import './style.scss';

const SquarePage = () => {
    return (
        <Container>
            <AboutPage />
            <SkillsPage />
            <SliderPortifolio />
            <ResumePage className="background-white"/>
            <InterestPage />
        </Container>
    );
};

export default SquarePage;