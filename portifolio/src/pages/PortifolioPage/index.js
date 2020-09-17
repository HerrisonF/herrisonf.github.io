import React from 'react';
import { Container } from 'react-bootstrap';
import TextBoxSectionComponent from '../../components/textBoxSectionComponent';
import projectsData from '../../helper/data/projects.json';
import SwitchImage from '../../assets/switch/SwitchImage';

import Slider from "react-slick";

import './style.scss';

const PortifolioPage = () => {
    const settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return( 
        <Container>
            <TextBoxSectionComponent text="Projetos"/>
            <div style={{
                width: "200px",
                height: "200px",
            }}
          >
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
        </Container>
    );
};

export default PortifolioPage;