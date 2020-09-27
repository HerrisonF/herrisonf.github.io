import React  from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './style.scss';
import projectsData from '../../helper/data/projects.json';
import { Carousel } from 'react-responsive-carousel';
import SwitchImage from '../../assets/switch/SwitchImage';
import TextBoxSectionComponent from '../../components/textBoxSectionComponent';
import BackButton from '../../components/backButtonComponent';

const PortifolioPage = () => {
    return (
        <Container>
            <BackButton />
             <TextBoxSectionComponent text="Portifolio"/>
                {
                    projectsData.projects.map(project => {
                        return(
                            <Row>
                            <Col>
                            <Carousel>
                                <div>
                                    <SwitchImage id={1} />
                                    <p className="legend">Legend 1</p>
                                </div>
                                <div>
                                    <SwitchImage id={2} />
                                    <p className="legend">Legend 2</p>
                                </div>
                                <div>
                                    <SwitchImage id={3} />
                                    <p className="legend">Legend 3</p>
                                </div>
                            </Carousel>
                            </Col>
                            <Col className="center">
                            <p className="format-text">Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </Col>
                            </Row>
                        )
                    })
                }
        </Container>
    );
};

export default PortifolioPage;