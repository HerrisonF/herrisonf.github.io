import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { SiFlutter, SiAndroid, SiSwift } from 'react-icons/si';

import './style.scss';

const MainSkillCardsComponent = () => {
  return(
    <Row>
      <div className="principal_skills_text">Skills Principais</div>
      <Col>
        <div>
          <div className="badge_skill_container">
            <div className="badge_tecnologie_type_text">Flutter</div>
            <SiFlutter className="badge_icon"/>
            <div className="badge_level_text">
              Sênior
            </div>
          </div>
        </div>
      </Col>
      <Col>
        <div>
          <div className="badge_skill_container">
            <div className="badge_tecnologie_type_text">Android</div>
            <SiAndroid className="badge_icon"/>
            <div className="badge_level_text">
              Pleno
            </div>
          </div>
        </div>
      </Col>
      <Col>
        <div>
          <div className="badge_skill_container">
            <div className="badge_tecnologie_type_text">Swift</div>
            <SiSwift className="badge_icon"/>
            <div className="badge_level_text">
              Júnior
            </div>
          </div>
        </div>
      </Col>
  </Row>
  );
};

export default MainSkillCardsComponent;