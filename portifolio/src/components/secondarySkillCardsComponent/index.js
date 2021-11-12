import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { SiJava, SiReact } from 'react-icons/si';

import './style.scss';

const SecondarySkillCardsComponent = () => {
  return(
    <Row>
      <div className="principal_skills_text">Skills Secundárias</div>
      <Col>
        <div>
          <div className="badge_skill_container">
            <div className="badge_tecnologie_type_text">Java</div>
            <SiJava className="badge_icon"/>
            <div className="badge_level_text">
              Pleno
            </div>
          </div>
        </div>
      </Col>
      <Col>
        <div>
          <div className="badge_skill_container">
            <div className="badge_tecnologie_type_text">React</div>
            <SiReact className="badge_icon"/>
            <div className="badge_level_text">
              Júnior
            </div>
          </div>
        </div>
      </Col>
  </Row>
  );
};

export default SecondarySkillCardsComponent;