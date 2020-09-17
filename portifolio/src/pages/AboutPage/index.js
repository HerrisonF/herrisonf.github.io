import React from 'react';
import { Container } from 'react-bootstrap';
import AboutMeTextComponent from '../../components/aboutMeTextComponent';
import HeaderImagemComponent from '../../components/headerImageComponent';
import TextBoxSectionComponent from '../../components/textBoxSectionComponent';
import Skillscomponent from '../../components/skillsComponent';
import './style.scss';

const AboutPage = () => {
    return (
        <Container>
            <HeaderImagemComponent />
            <TextBoxSectionComponent text="Sobre mim"/>
            <AboutMeTextComponent />
            <TextBoxSectionComponent text="Habilidades"/>
            <Skillscomponent />
        </Container>
    );
};

export default AboutPage;