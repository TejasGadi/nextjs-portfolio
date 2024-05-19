"use client";
import styled from "styled-components";
import { motion } from "framer-motion";
import Image from "next/image";
import heroPng from "../../../assets/hero.png";
import scrollDownSVG from "../../../assets/Scroll_Down.png";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      duration: 1,
    },
  },
  scrollDownButton: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 1,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-1020%",
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 50,
    },
  },
};

const Hero = () => {
  return (
    <HeroContainer>
      <Wrapper>
        <TextContainer
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>TEJAS GADI</motion.h2>
          <motion.h1 variants={textVariants}>A Software Developer</motion.h1>
          <Buttons variants={textVariants}>
            <motion.a href="https://drive.google.com/file/d/1IDN8CPnDoqH_cANcGsVnj4lZOlaEhDmT/view">
              <motion.button variants={textVariants}>
                Download Resume
              </motion.button>
            </motion.a>
            <motion.a href="#Contact">
              <motion.button variants={textVariants}>Contact Me</motion.button>
            </motion.a>
          </Buttons>
          <ScrollDownContainer
            variants={textVariants}
            animate="scrollDownButton"
          >
            <Image
              variants={textVariants}
              src={scrollDownSVG}
              width={50}
              alt="Scroll Down SVG"
            />
            <p>Scroll Down</p>
          </ScrollDownContainer>
        </TextContainer>
      </Wrapper>
      <SlidingContainer
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        ML Engineer &nbsp;&nbsp;&nbsp; Data Scientist &nbsp;&nbsp;&nbsp; Web
        Developer
      </SlidingContainer>
      <ImageContainer>
        <Image src={heroPng} height={700} alt="Picture of the author" />
      </ImageContainer>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  height: calc(100vh - 10vh);
  background: linear-gradient(180deg, #0c0c1d, #111132);
  overflow: hidden;
`;

const Wrapper = styled.div`
  max-width: 65rem;
  height: 100%;
  margin: auto;
`;

const TextContainer = styled(motion.div)`
  height: 100%;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;

  h2 {
    font-size: 1.75rem;
    letter-spacing: 12px;
    color: rebeccapurple;
  }

  h1 {
    font-size: 4rem;
  }
`;

const Buttons = styled(motion.div)`
  z-index: 2;
  button {
    padding: 1.25rem;
    border: 1px solid white;
    border-radius: 10px;
    background-color: transparent;
    margin-right: 1.5rem;
    color: white;
    cursor: pointer;
    font-weight: 300;
    &:hover {
      background-color: white;
      color: black;
    }
  }
`;

const ImageContainer = styled.div`
  position: absolute;
  overflow: hidden;
  height: 90vh;
  right: 0;
  bottom: 0;

  img {
    object-fit: cover;
    height: 100%;
  }
`;

const SlidingContainer = styled(motion.div)`
  position: absolute;
  font-size: 50vh;
  white-space: nowrap;
  bottom: 0;
  color: #ffffff09;
  width: 50%;
  font-weight: bold;
  user-select: none;
`;

const ScrollDownContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 15px;

  img {
    margin-left: 1rem;
  }
`;

export default Hero;
