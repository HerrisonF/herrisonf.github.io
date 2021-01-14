import React, { useEffect }  from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './style.scss';
import projectsData from '../../helper/data/galeryPortifolio.json';
import { Carousel } from 'react-responsive-carousel';
import SwitchImage from '../../assets/switch/SwitchImage';
import TextBoxSectionComponent from '../../components/textBoxSectionComponent';
import BackButton from '../../components/backButtonComponent';

const PortifolioPage = () => {

    const navigate = link => {
        window.location.href = link;
    }

    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);

    return (
        <Container className="background-white-portifolio">
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
                                    {project.button && (
                                        <Row>
                                            <Button 
                                                className="margin-button"
                                                onClick={()=> navigate(project.button)}
                                            >
                                                Visualizar
                                            </Button>
                                        </Row>)}
                                </Col>
                            </Row>
                        )
                    })
                }
        </Container>
    );
};

export default PortifolioPage;