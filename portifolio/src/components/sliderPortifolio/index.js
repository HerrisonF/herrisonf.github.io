import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TextBoxSectionComponent from '../../components/textBoxSectionComponent';
import projectsData from '../../helper/data/homePortifolio.json';
import SwitchImage from '../../assets/switch/SwitchImage';

import './style.scss';

const SlidePortifolio = () => {
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
              projectsData.projects.map(project => {
                  return(
                      <Col md={2} className="margin-cards">
                        <SwitchImage id={project} />
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