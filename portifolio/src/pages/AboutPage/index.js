import React from 'react';
import { Container } from 'react-bootstrap';
import BackButtonComponent from '../../components/backButtonComponent';

const AboutPage = () => {
    return (
        <Container>
            <BackButtonComponent />
            <div>About Page</div>
        </Container>
    );
};

export default AboutPage;