import React from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';  // Importing the icon

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  position: relative;  // Setting to relative so we can position the close icon absolute within this container
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  max-width: 500px;
  color: #333;
`;

const CloseIcon = styled(FaTimes)`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 1.5rem;
  color: #333;

  &:hover {
    color: #777;
  }
`;

const ProjectLink = styled.a`
  display: block;
  margin-top: 10px;
  color: #007BFF;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

function ProjectDetailModal({ project, onClose }) {
  return (
    <ModalBackdrop onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <CloseIcon onClick={onClose} />
        <h2>{project.title}</h2>
        <p><strong>Description:</strong> {project.detailedDescription}</p>
        <h4>Technologies Used:</h4>
        <p>{project.technologies}</p>
        <h4>Key Features:</h4>
        <ul>
          {project.features.map((feature, idx) => <li key={idx}>{feature}</li>)}
        </ul>
        <ProjectLink href={project.projectUrl} target="_blank" rel="noopener noreferrer">Visit Project</ProjectLink>
        <ProjectLink href={project.githubUrl} target="_blank" rel="noopener noreferrer">View on GitHub</ProjectLink>
      </ModalContent>
    </ModalBackdrop>
  );
}

export default ProjectDetailModal;
