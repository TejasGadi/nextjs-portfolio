"use client";
import styled from "styled-components";
import EducationCard from "./EducationCard";
import Link from "next/link";
const About = ({ about, socials, education }) => {
  return (
    <AboutContainer id="About">
      <Wrapper>
        <HeadingContainer>
          <h1>About Me</h1>
        </HeadingContainer>
        <Details>
          <Description>
            <ul>
              {about[0].desc.map((point) => (
                <li>{point}</li>
              ))}
            </ul>
            <a href={socials[0].linkedin} target="_blank" rel="noreferrer">
                <Connect>Connect on LinkedIN</Connect>
            </a>
          </Description>
          <Education>
            <h1>Education</h1>
            {education.map((detail) => (
              <EducationCard detail={detail} />
            ))}
          </Education>
        </Details>
      </Wrapper>
    </AboutContainer>
  );
};

const AboutContainer = styled.section`
  background: linear-gradient(180deg, #0c0c1d, #111132);
`;
const Wrapper = styled.div`
  margin-top: 2rem;
  height: 100%;
  width: 70rem;
  margin: auto;
  position: relative;
`;
const Details = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  flex: 3;
`;
const Description = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  ul {
    font-size: 1.4rem;
    text-align: justify;
  }
  li {
    margin: 0 0 10px 0;
  }
  a {
    padding: 0;
    cursor: pointer;
    position: absolute;
    top: 75%;
    left: 38%;
  }
`;
const Connect = styled.button`
  background-color: orange;
  border: none;
  border-radius: 10px;
  font-size: 1.2rem;
  padding: 0.75rem;
  cursor: pointer;
  border: 2px solid orange;
  &:hover {
    background: transparent;
    color: white;
  }
`;
const Education = styled.div`
  h1 {
    color: orange;
    font-size: 2rem;
    text-transform: capitalize;
  }
  flex: 1;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  /* background: lightcyan; */
`;

const HeadingContainer = styled.div`
  position: absolute;
  top: 5vh;
  left: 0;
  padding-top: 50px;
  text-align: center;
  color: orange;
  font-size: 2.75rem;
  width: 100%;
  margin: auto;
  h1 {
  }
`;

export default About;
