"use client";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import styled from "styled-components";
import { useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import urlFor from "@/utility/imageUtility";
import formattedDate from "@/utility/dateUtility";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const SingleExperience = ({ item }) => {
  const ref = useRef();

  const { scrollXProgress } = useScroll({
    target: ref,
    // offset:["start start","end start"]
  });

  const y = useTransform(scrollXProgress, [0, 1], ["0%", "100%"]);
  return (
    <section>
      <SingleExperienceContainer>
        <Wrapper>
          <LeftContainer>
            <ImageContainer ref={ref}>
              <img src={urlFor(item.logo)} alt="" />
            </ImageContainer>
            <Tenure>
              <h2>
                {formattedDate(item.startDate)} to {formattedDate(item.endDate)}
              </h2>
              <p>Location: {item.companyLocation}</p>
            </Tenure>
          </LeftContainer>
          <RightContainer>
            <DescContainer>
              <h2>{item.title}</h2>
              <h3>{item.company}</h3>
              <ol>
                {item.desc.map((point) => (
                  <li>{point}</li>
                ))}
              </ol>
              <button>View Experience Letter</button>
            </DescContainer>
            <Technologies>
              <motion.h2>Skills:</motion.h2>
              <TechnologiesListContainer>
                {item.technologies.map((tech) => (
                  <motion.a href="https://skillicons.dev">
                    <img
                      height={"40px"}
                      src={"https://skillicons.dev/icons?i=" + tech}
                    />
                    <p>{tech}</p>
                  </motion.a>
                ))}
              </TechnologiesListContainer>
            </Technologies>
          </RightContainer>
        </Wrapper>
      </SingleExperienceContainer>
    </section>
  );
};

const Experience = ({ experience_data }) => {
  const ref = useRef();

  const { scrollXProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollXProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <ExperienceContainer ref={ref}>
      <ProgressContainer>
        <h1>Experience Showcase</h1>
        <ProgressBar style={{ scaleX: scaleX }}></ProgressBar>
      </ProgressContainer>
      <section style={{ position: "relative" }}>
        <Carousel responsive={responsive} swipeable pauseOnHover>
          {experience_data.map((item) => (
            <SingleExperience key={item.id} item={item} />
          ))}
        </Carousel>
      </section>
    </ExperienceContainer>
  );
};
const LeftContainer = styled.div`
  height: 60%;
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const RightContainer = styled.div`
  height: 60%;
  flex: 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const Tenure = styled.div`
  flex: 1;
  font-family: serif;
  display: flex;
  flex-direction: column;
  gap: 10px;
  h2 {
    font-size: 1.3rem;
  }
  p {
    font-weight: 100;
    font-size: 1.25rem;
  }
`;
const Technologies = styled(motion.div)`
  h2 {
    color: #ccc;
  }
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
`;

const ExperienceContainer = styled.div``;
const ProgressContainer = styled.div`
  position: relative;
  top: 15vh;
  left: 0;
  padding-top: 50px;
  text-align: center;
  color: orange;
  font-size: 1.75rem;
  h1 {
  }
`;
const ProgressBar = styled(motion.div)`
  height: 0.5rem;
  background-color: white;
`;

// styled components for SingleProject component

const SingleExperienceContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
const Wrapper = styled.div`
  margin: 5rem;
  max-width: 60rem;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;
const ImageContainer = styled.div`
  flex: 2;
  height: 50%;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const DescContainer = styled(motion.div)`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 30px;

  h2 {
    font-size: 3.25rem;
  }

  ol {
    color: gray;
    font-size: 1.25rem;
  }

  button {
    background-color: orange;
    border: none;
    border-radius: 10px;
    padding: 10px;
    width: 10rem;
    cursor: pointer;
  }
`;

const TechnologiesListContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  a{
    flex:1;
  }
  p{
    text-align: center;
    text-transform: capitalize;
  }
`;

export default Experience;
