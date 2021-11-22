import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TextBoxSectionComponent from '../textBoxSectionComponent';
import core_projects_portfolio from '../../helper/data/core_projects_portfolio.json';
import SwitchImage from '../../assets/switch/SwitchImage';

import './style.scss';

const DashBoardPortfolioComponent = () => {
  const navigate = link => {
    window.location.href = link;
}

    const SentToPortifolio = () => {
      return (
        <Link to="/portfolio" >
           <Button 
              className="see_more_projects_dashboard"
            >
              Ver mais projetos e detalhes
            </Button> 
        </Link>
      );
    };
    
    return( 
      <div className="dashboard_projects_container">
        <TextBoxSectionComponent text="Portfólio"/>
        <Row className="dashboard_gallery">
          {
              core_projects_portfolio.projects.map(project => {
                  return(
                      <Col md={2} className="margin_cards_project_dashboard" onClick={()=> navigate(project.button)}>
                        <SwitchImage id={project.images[0]}/>
                      </Col>
                  )
              })
          }
        </Row>
        <SentToPortifolio />
      </div>
    );
};

export default DashBoardPortfolioComponent;