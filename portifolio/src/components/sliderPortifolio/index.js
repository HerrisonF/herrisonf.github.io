import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TextBoxSectionComponent from '../../components/textBoxSectionComponent';
import projectsData from '../../helper/data/projects.json';
import SwitchImage from '../../assets/switch/SwitchImage';

import Slider from "react-slick";

import './style.scss';

const SlidePortifolio = () => {
    const SentToPortifolio = () => {
      return (
        <Link to="/portifolio" >
           <Button 
              className="button-see-more"
            >
              Mais projetos
            </Button> 
        </Link>
      );
    };

    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
    return( 
      <Container>
        <TextBoxSectionComponent text="Projetos"/>
          <div className="slider-center">
            <div className="slider-size">
              <Slider {...settings} >
                {
                    projectsData.projects.map(project => {
                        return(
                            <SwitchImage id={project.image.imageId} />
                        )
                    })
                }
              </Slider>
            </div>
          </div>
          <div className="see-more">
          <SentToPortifolio />
          </div>
        </Container>
    );
};

export default SlidePortifolio;