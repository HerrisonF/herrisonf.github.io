import React  from 'react';
import { Container } from 'react-bootstrap';
import CardComponent from '../../components/cardComponent';
import { CardDeck } from 'react-bootstrap';
import './style.scss';
import projectsData from '../../helper/data/projects.json';



const PortifolioPage = () => {
    const handleClick = () => {
        console.log('clicou');
    }

    return (
        <Container>
            <div>Portifolio</div>
            <CardDeck>
                {
                    projectsData.projects.map(project => {
                        return(
                            <CardComponent id={project.image.imageId} click={() => handleClick()} />
                        )
                    })
                }
            </CardDeck>
        </Container>
    );
};

export default PortifolioPage;