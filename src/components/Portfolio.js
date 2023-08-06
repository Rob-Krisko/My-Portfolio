import React, { useState } from 'react';
import styled from 'styled-components';
import Slider from "react-slick";
import ProjectCard from './ProjectCard';
import ProjectDetailModal from './ProjectDetailModal';

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
      description: 'A dynamic web application for managing tasks and schedules.',
      imageUrl: 'https://via.placeholder.com/300',
      projectUrl: 'https://www.example.com/project1',
      technologies: 'React, Node.js, Express, MongoDB',
      githubUrl: 'https://github.com/Rob-Krisko/project1',
      detailedDescription: 'Built with a MERN stack, Project 1 provides users with a seamless experience to manage their tasks. The responsive design ensures that users can access their schedules on the go, from any device.',
      features: [
          'User authentication and profile management.',
          'Real-time notifications.',
          'Collaboration features for group tasks.'
      ]
    },
    {
      title: 'Project 2',
      description: 'A mobile app for tracking fitness routines.',
      imageUrl: 'https://via.placeholder.com/300',
      projectUrl: 'https://www.example.com/project2',
      technologies: 'React Native, Redux, Firebase',
      githubUrl: 'https://github.com/Rob-Krisko/project2',
      detailedDescription: 'Project 2 offers a set of tools for fitness enthusiasts to track and optimize their workouts. Integrations with smart devices allow real-time health data synchronization.',
      features: [
          'Workout schedules and reminders.',
          'Integration with wearable devices.',
          'Social features for challenging friends.'
      ]
    },
    {
      title: 'Project 3',
      description: 'An e-commerce platform for handmade crafts.',
      imageUrl: 'https://via.placeholder.com/300',
      projectUrl: 'https://www.example.com/project3',
      technologies: 'Vue.js, Vuetify, Django, PostgreSQL',
      githubUrl: 'https://github.com/Rob-Krisko/project3',
      detailedDescription: 'Targeted at indie creators, Project 3 is an online marketplace for unique, handmade items. The platform handles everything from product listings to payment processing.',
      features: [
          'Vendor profiles and product listings.',
          'Secure payment processing.',
          'Review and rating system.'
      ]
    },
    {
      title: 'Project 4',
      description: 'A platform for bloggers and writers.',
      imageUrl: 'https://via.placeholder.com/300',
      projectUrl: 'https://www.example.com/project4',
      technologies: 'Angular, TypeScript, Flask, MySQL',
      githubUrl: 'https://github.com/Rob-Krisko/project4',
      detailedDescription: 'Project 4 offers a space for writers to share their stories, articles, and poetry. The platform emphasizes community interaction with commenting and sharing features.',
      features: [
          'Customizable writer profiles.',
          'Analytics for post engagement.',
          'Easy embedding of multimedia.'
      ]
    },
    {
      title: 'Project 5',
      description: 'A game for puzzle enthusiasts.',
      imageUrl: 'https://via.placeholder.com/300',
      projectUrl: 'https://www.example.com/project5',
      technologies: 'Unity, C#',
      githubUrl: 'https://github.com/Rob-Krisko/project5',
      detailedDescription: 'Project 5 is an engaging puzzle game with progressively challenging levels. It incorporates physics-based mechanics and offers players a variety of skins and themes.',
      features: [
          'Hundreds of levels with increasing difficulty.',
          'Leaderboards and achievements.',
          'Option for user-generated content.'
      ]
    },
    {
      title: 'Project 6',
      description: 'A tool for remote teams.',
      imageUrl: 'https://via.placeholder.com/300',
      projectUrl: 'https://www.example.com/project6',
      technologies: 'Svelte, WebRTC, Go, SQLite',
      githubUrl: 'https://github.com/Rob-Krisko/project6',
      detailedDescription: 'Aimed at remote teams, Project 6 offers a suite of tools for communication, collaboration, and project management. The video conferencing feature supports breakout rooms and screen sharing.',
      features: [
          'Text, voice, and video chat.',
          'Task tracking and assignment.',
          'Shared document editing.'
      ]
    }
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

  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <CarouselContainer>
      <h1>My Projects</h1>
      <Slider {...settings}>
        {projects.map((project, index) => (
          <Slide key={index} onClick={() => handleCardClick(project)}>
            <ProjectCard project={project} />
          </Slide>
        ))}
      </Slider>
      {selectedProject && (
        <ProjectDetailModal 
          project={selectedProject} 
          onClose={handleCloseModal}
        />
      )}
    </CarouselContainer>
  );
}

export default Portfolio;
