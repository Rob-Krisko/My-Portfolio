import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow: hidden;
  margin: 10px;
  cursor: pointer;  // Added to show it's clickable
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 10px;
`;

function ProjectCard({ project }) {
  const { title, description, imageUrl } = project;

  return (
    <Card>
      <CardImage src={imageUrl} alt={title} />
      <CardContent>
        <h3>{title}</h3>
        <p>{description}</p>
      </CardContent>
    </Card>
  );
}

export default ProjectCard;
