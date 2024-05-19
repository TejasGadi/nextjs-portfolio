"use client";
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const SkillsCard = ({ name, skills }) => {
  const tiltMaxAngle = 10;
  let isLogo = true;
  if (name == "Computer Science Fundamentals" || name == "Soft Skills") {
    isLogo = false;
  }
  return (
    <Tilt tiltMaxAngleX={tiltMaxAngle} tiltMaxAngleY={tiltMaxAngle}>
      <Card>
        <TextContainer>
          <h2>{name}</h2>
        </TextContainer>
        <LogoContainer>
          {isLogo
            ? skills.map((skill) => (
                <a href="https://skillicons.dev">
                  <img src={"https://skillicons.dev/icons?i=" + skill} />
                  <p>{skill}</p>
                </a>
              ))
            : skills.map((skill) => <NonLogoDiv>{skill}</NonLogoDiv>)}
        </LogoContainer>
      </Card>
    </Tilt>
  );
};

const Skills = ({ skills_data }) => {
  return (
    <Section2
      id="Skills"
      initial={{
        height: "0vh",
        opacity: 0,
      }}
      animate={{
        height: "100vh",
        opacity: 1,
        transition: { duration: 0.6 },
      }}
      exit={{
        height: "0vh",
      }}
    >
      <h1>My Skills</h1>
      <Cards>
        {skills_data.map((data) => (
          <SkillsCard name={data.title} skills={data.skills} />
        ))}
      </Cards>
    </Section2>
  );
};

const NonLogoDiv = styled.div`
  text-transform: capitalize;
  padding: 1.25rem 1.5rem;
  border-radius: 0.5rem;
  background: orange;
  color: black;
`;

const Section2 = styled(motion.section)`
  background: linear-gradient(180deg, #0c0c1d, #111132);
  color: #ffffff;
  h1 {
    font-size: 3.5rem;
    margin-bottom: 2rem;
    color: orange;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 75vh;
  z-index: 0;
`;

const Cards = styled.div`
  margin-top: 2rem;
  z-index: 0;
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Card = styled.div`
  padding: 1.75rem;
  width: 18rem;
  height: 30rem;
  flex: 1;
  border: 1px solid white;
  box-shadow: 1px 1px 18px 1px white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
`;

const TextContainer = styled.div`
  width: 100%;
  text-align: center;
  flex: 1;
  min-width: 20vh;
  font-size: 1rem;
`;
const LogoContainer = styled.div`
  flex: 5;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: white;
    border-radius: 10px;
  }
  gap: 15px;
  width: 100%;
  a {
    text-align: center;
    img {
      width: 4rem;
    }
  }
  p {
    text-transform: capitalize;
    font-size: 1rem;
  }
`;

export default Skills;
