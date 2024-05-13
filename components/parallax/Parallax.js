import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styled from "styled-components";

const Parallax = ({ type }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <ParallaxContainer
      ref={ref}
      style={{
        background:
          type == "skills"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type == "skills" ? "My Skills" : "Projects"}
      </motion.h1>
      <Mountains></Mountains>
      {type == "skills" ? (
        <Planets style={{ y: yBg }}></Planets>
      ) : (
        <Sun style={{ y: yBg }}></Sun>
      )}
      <Stars style={{ x: yBg }}></Stars>
    </ParallaxContainer>
  );
};

const ParallaxContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  h1 {
    font-size: 7rem;
  }
`;
const Mountains = styled(motion.div)`
  background-image: url("/mountains.png");
  background-size: cover;
  background-position: bottom;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 3;
`;
const Planets = styled(motion.div)`
  background-image: url("/planets.png");
  background-size: cover;
  background-position: bottom;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 2;
`;
const Sun = styled(motion.div)`
  background-image: url("/sun.png");
  background-size: cover;
  background-position: bottom;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 2;
`;
const Stars = styled(motion.div)`
  background-image: url("/stars.png");
  background-size: cover;
  background-position: bottom;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
`;

export default Parallax;
