import React from 'react';
import { Container } from 'react-bootstrap';
import AboutMeTextComponent from '../../components/aboutMeTextComponent';
import HeaderImagemComponent from '../../components/headerImageComponent';
import './style.scss';

const AboutPage = () => {
    return (
        <Container className="background-white">
            <HeaderImagemComponent />
            <AboutMeTextComponent />
        </Container>
    );
};

export default AboutPage;