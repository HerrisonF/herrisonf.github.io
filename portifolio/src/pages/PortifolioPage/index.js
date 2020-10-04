import React, { useEffect }  from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './style.scss';
import projectsData from '../../helper/data/galeryPortifolio.json';
import { Carousel } from 'react-responsive-carousel';
import SwitchImage from '../../assets/switch/SwitchImage';
import TextBoxSectionComponent from '../../components/textBoxSectionComponent';
import BackButton from '../../components/backButtonComponent';

const PortifolioPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);

    return (
        <Container>
            <BackButton />
             <TextBoxSectionComponent text="Portifolio"/>
                {
                    projectsData.projects.map(project => {
                        return(
                            <Row>
                                <Col xs={12} md={6}>
                                    <Carousel>
                                        {
                                            project.images.map(id => {
                                                return(
                                                    <div>
                                                        <SwitchImage id={id} type={true} />
                                                    </div>
                                                )
                                            })
                                        }
                                    </Carousel>
                                </Col>
                                <Col className="center">
                                    <p className="format-text">{project.description}</p>
                                </Col>
                            </Row>
                        )
                    })
                }
        </Container>
    );
};

export default PortifolioPage;