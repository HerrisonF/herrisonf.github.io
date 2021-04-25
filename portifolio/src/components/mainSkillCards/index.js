import React from 'react'
import { Card, Col, Row, Container } from 'react-bootstrap';
import { SiFlutter, SiJava, SiAndroid } from 'react-icons/si';

import './style.scss';

const MainSkillCards = () => {
  return(
      <Container>
          <Row>
          <Col xs={12} md={3} className="format-row-card-skill">
            <Card className="format-card-skill">
				<Card.Body className="format-body-card-skill">
					<Card.Title className="format-title-card-skil">Flutter</Card.Title>
					<SiFlutter className="format-icon-card-skil"/>
				</Card.Body>
			</Card>
          </Col>
          <Col xs={12} md={3} className="format-row-card-skill">
             <Card className="format-card-skill">
				<Card.Body className="format-body-card-skill">
					<Card.Title className="format-title-card-skil">Android</Card.Title>
					<SiAndroid className="format-icon-card-skil"/>
				</Card.Body>
			</Card>
          </Col>
          <Col xs={12} md={3} className="format-row-card-skill">
            <Card className="format-card-skill">
				<Card.Body className="format-body-card-skill">
					<Card.Title className="format-title-card-skil">Java</Card.Title>
					<SiJava className="format-icon-card-skil"/>
				</Card.Body>
			</Card>
          </Col>
      </Row>
      </Container>
  );
};

export default MainSkillCards;