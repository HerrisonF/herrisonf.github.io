import React from 'react';
import { Container } from 'react-bootstrap';
import AboutPage from '../AboutPage';
import ResumePage from '../ResumePage';
import PortifolioPage from '../PortifolioPage';
import BlogPage from '../BlogPage';

import './style.scss';

const SquarePage = () => {
    return (
        <Container>
            <AboutPage />
            <PortifolioPage />
            <ResumePage />
            <BlogPage />
        </Container>
    );
};

export default SquarePage;