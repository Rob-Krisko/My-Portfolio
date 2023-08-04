import React from 'react';
import styled from 'styled-components';
import Slider from "react-slick";
import ProjectCard from './ProjectCard';

const Slide = styled.div`
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  height: 100% !important;
  width: 100% !important;
`;

const CarouselContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;

function Portfolio() {
  const projects = [
    {
      title: 'Project 1',
      description: 'This is a description of project 1.',
      imageUrl: 'https://via.placeholder.com/300',
      projectUrl: 'https://www.example.com/project1',
    },
    {
      title: 'Project 2',
      description: 'This is a description of project 2.',
      imageUrl: 'https://via.placeholder.com/300',
      projectUrl: 'https://www.example.com/project2',
    },
    {
      title: 'Project 3',
      description: 'This is a description of project 3.',
      imageUrl: 'https://via.placeholder.com/300',
      projectUrl: 'https://www.example.com/project3',
    },
    {
      title: 'Project 4',
      description: 'This is a description of project 4.',
      imageUrl: 'https://via.placeholder.com/300',
      projectUrl: 'https://www.example.com/project4',
    },
    {
      title: 'Project 5',
      description: 'This is a description of project 5.',
      imageUrl: 'https://via.placeholder.com/300',
      projectUrl: 'https://www.example.com/project5',
    },
    {
      title: 'Project 6',
      description: 'This is a description of project 6.',
      imageUrl: 'https://via.placeholder.com/300',
      projectUrl: 'https://www.example.com/project6',
    },
    // Add more projects as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false // Hide dots on screens smaller than 1024px
        }
      }
    ]    
  };

  return (
    <CarouselContainer>
      <h1>My Projects</h1>
      <Slider {...settings}>
        {projects.map((project, index) => (
          <Slide key={index}>
            <ProjectCard project={project} />
          </Slide>
        ))}
      </Slider>
    </CarouselContainer>
  );
}

export default Portfolio;
