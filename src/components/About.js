import React from 'react';
import styled from 'styled-components';
import Markdown from 'react-showdown';
import pfp from '../assets/pfp.png';
import { FaJava, FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiMysql } from 'react-icons/si';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: 'Roboto', sans-serif;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin-bottom: 20px;
`;

const BioContainer = styled.div`
  max-width: 800px;
  margin-bottom: 20px;
  text-align: justify;
  font-size: 1.5em;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
`;

const Skill = styled.div`
  border: 1px solid #61dafb;
  padding: 10px;
  border-radius: 5px;
`;

const ContactLink = styled.a`
  color: #61dafb;
  text-decoration: none;
`;

const BioHeader = styled.h2`
  color: #61dafb;
  font-size: 2em;
  margin-bottom: 20px;
`;

const SubSection = styled.div`
  margin-bottom: 30px;
`;

const bio = `
Greetings, I'm Rob, a diligent Computer Science student set to graduate this December. As a dedicated individual who enjoys both solitary problem-solving and collaborative efforts, I find great joy in learning new things and staying up-to-date with the latest tech trends. My background is not only rooted in academia but also colored by unique experiences, as I am a proud Navy Submarine veteran.

Throughout my educational journey, I've seized opportunities to lead teams on various school projects, a role that I found incredibly rewarding. I possess an associate degree in Engineering and carry with me a wealth of experience from my time as a Sonar Technician on a nuclear submarine, where I achieved a senior qualification. The world of computers and digital technology has always captivated me, sparking a curiosity that continues to drive my career pursuits.

In terms of expertise, my leadership capabilities are complemented by an ability to contribute effectively as a team member. My military background has instilled in me great patience, a keen drive for excellence, and a preference for proactive rather than reactive planning and execution. I've developed a strong foundation in Java, web design principles, and also carry some knowledge within the realm of cybersecurity.

While I'm proud of several accomplishments, my time in the military yielded the most significant achievements. Academically, my determination to excel is reflected in my multiple inclusions on the Dean's List.

On a personal note, I have a passion for woodworking and wood-burning, and I love going on adventures with my trusty canine companion. Exploring new places, experiencing diverse cultures, and sampling unique foods all contribute to my love for travel. I also enjoy playing video games, watching movies, and spending time with my family.

Moving forward, my goal is to continually hone my skills and have my work recognized and appreciated by others. There's a unique sense of satisfaction that comes from showcasing something I've created, and I aim to experience this feeling many times over in my career.

For more details or to get in touch, please feel free to visit my Contact page. I look forward to connecting with you.
`;

const skills = ["Java", "HTML", "CSS", "JavaScript", "React", "Node.js", "SQL"];

function About() {
  return (
    <Container>
      <ProfileImage src={pfp} alt="Profile" />
      <BioContainer>
        <BioHeader>About Me</BioHeader>
        <SubSection>
          {/* Part of bio */}
          <Markdown markdown={bio.substring(0, bio.indexOf("Throughout my educational journey"))} options={{ simpleLineBreaks: true }} />
        </SubSection>
        <BioHeader>Education</BioHeader>
        <SubSection>
          {/* Part of bio */}
          <Markdown markdown={bio.substring(bio.indexOf("Throughout my educational journey"), bio.indexOf("In terms of expertise"))} options={{ simpleLineBreaks: true }} />
        </SubSection>
        <BioHeader>Expertise</BioHeader>
        <SubSection>
          {/* Part of bio */}
          <Markdown markdown={bio.substring(bio.indexOf("In terms of expertise"), bio.indexOf("On a personal note"))} options={{ simpleLineBreaks: true }} />
        </SubSection>
        <BioHeader>Personal</BioHeader>
        <SubSection>
          {/* Part of bio */}
          <Markdown markdown={bio.substring(bio.indexOf("On a personal note"), bio.length)} options={{ simpleLineBreaks: true }} />
        </SubSection>
      </BioContainer>
      <BioHeader>Skills</BioHeader>
      <SkillsContainer>
        {skills.map((skill, index) => (
          <Skill key={index}>
            {skill === 'Java' && <FaJava />}
            {skill === 'HTML' && <FaHtml5 />}
            {skill === 'CSS' && <FaCss3Alt />}
            {skill === 'JavaScript' && <FaJsSquare />}
            {skill === 'React' && <FaReact />}
            {skill === 'Node.js' && <FaNodeJs />}
            {skill === 'SQL' && <SiMysql />}
            {/* Add more icons for other skills */}
            {skill}
          </Skill>
        ))}
      </SkillsContainer>
      <ContactLink href="/contact">Contact me <img src="https://img.icons8.com/ios-glyphs/30/000000/long-arrow-right.png"/></ContactLink>
    </Container>
  );
}

export default About;
