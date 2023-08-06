import React from 'react';
import styled from 'styled-components';
import CanvasBackground from './CanvasBackground';
import { Link } from 'react-router-dom';

const HomeContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  background: transparent;
  overflow: hidden;
`;

const ContentContainer = styled.div`
  position: absolute;
  top: 20%; /* Adjust this value to move the content up or down */
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  overflow: hidden;
`;

const Title = styled.h1`
  font-size: 3em;
`;

const Subtitle = styled.p`
  font-size: 1.5em;
`;

const ActionButton = styled(Link)`
  font-size: 1.2em;
  padding: 10px 20px;
  margin-top: 20px;
  border: none;
  border-radius: 5px;
  background-color: #282c34;
  color: white;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    background-color: #61dafb;
    color: #282c34;
  }
`;

function Home() {
  return (
    <HomeContainer>
      <CanvasBackground />
      <ContentContainer>
        <Title>Hello, I'm Robert Krisko!</Title>
        <Subtitle>I'm an aspiring computer programmer. Welcome to my portfolio.</Subtitle>
        <ActionButton to="/portfolio">View My Work</ActionButton>
      </ContentContainer>
    </HomeContainer>
  );
}

export default Home;
