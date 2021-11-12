import React, { useEffect }  from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './style.scss';
import projectsData from '../../helper/data/galeryPortifolio.json';
import { Carousel } from 'react-responsive-carousel';
import SwitchImage from '../../assets/switch/SwitchImage';
import TextBoxSectionComponent from '../../components/textBoxSectionComponent';
import BackButton from '../../components/backButtonComponent';

const PortfolioPage = () => {

    const navigate = link => {
        window.location.href = link;
    }

    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);

    return (
        <Container className="outside">
            <BackButton />
            <TextBoxSectionComponent text="Portfólio"/>
            <Row className="background_inside_portfolio_page_row">
                {
                    projectsData.projects.map(project => {
                        return(
                            <Row className="portfolio_item_row">
                                <Col xs={12} md={6} ls={4} className="carrousel_col">
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
                                <Col className="portfolio_item_description_col">
                                    <p className="portfolio_description_text">{project.description}</p>
                                    {project.button && (
                                        <Row>
                                            <Button 
                                                className="portfolio_item_button"
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
            </Row>
        </Container>
    );
};

export default PortfolioPage;