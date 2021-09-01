import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TextBoxSectionComponent from '../../components/textBoxSectionComponent';
import projects from '../../helper/data/galeryPortifolio.json';
import SwitchImage from '../../assets/switch/SwitchImage';

import './style.scss';

const SlidePortifolio = () => {
  const navigate = link => {
    window.location.href = link;
}

    const SentToPortifolio = () => {
      return (
        <Link to="/portifolio" >
           <Button 
              className="button-see-more"
            >
              Ver mais projetos
            </Button> 
        </Link>
      );
    };
    
    return( 
      <Container className="back-slider">
        <TextBoxSectionComponent text="Projetos"/>
        <Row className="format-slider-portifolio">
          {
              projects.projects.map(project => {
                  return(
                      <Col md={2} className="margin-cards" onClick={()=> navigate(project.button)}>
                        <SwitchImage id={project.images[0]}/>
                      </Col>
                  )
              })
          }
        </Row>
        <div className="see-more">
          <SentToPortifolio />
        </div>
        </Container>
    );
};

export default SlidePortifolio;