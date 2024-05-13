import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import styled from "styled-components";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "Music App",
    img: "https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic beatae expedita libero, commodi excepturi, delectus quasi perspiciatis labore ipsum itaque culpa. Sapiente autem necessitatibus saepe beatae harum sint excepturi nemo, numquam odio, fuga in velit reiciendis at facilis, culpa suscipit cupiditate delectus enim? Illo animi doloribus beatae quo inventore nemo!",
  },
  {
    id: 2,
    title: "Music App",
    img: "https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic beatae expedita libero, commodi excepturi, delectus quasi perspiciatis labore ipsum itaque culpa. Sapiente autem necessitatibus saepe beatae harum sint excepturi nemo, numquam odio, fuga in velit reiciendis at facilis, culpa suscipit cupiditate delectus enim? Illo animi doloribus beatae quo inventore nemo!",
  },
  {
    id: 3,
    title: "Music App",
    img: "https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic beatae expedita libero, commodi excepturi, delectus quasi perspiciatis labore ipsum itaque culpa. Sapiente autem necessitatibus saepe beatae harum sint excepturi nemo, numquam odio, fuga in velit reiciendis at facilis, culpa suscipit cupiditate delectus enim? Illo animi doloribus beatae quo inventore nemo!",
  },
];

const SingleProject = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset:["start start","end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-100%", "100%"]);

  return (
    <section>
      <SingleProjectContainer>
        <Wrapper>
          <ImageContainer ref={ref}>
            <img src={item.img} alt="" />
          </ImageContainer>
          <TextContainer style={{ y: y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>View Project</button>
          </TextContainer>
        </Wrapper>
      </SingleProjectContainer>
    </section>
  );
};

const Projects = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  console.log(scaleX);

  return (
    <ProjectContainer ref={ref}>
      <ProgressContainer>
        <h1>Featured Works</h1>
        <ProgressBar style={{ scaleX: scaleX }}></ProgressBar>
      </ProgressContainer>
      {items.map((item) => (
        <SingleProject key={item.id} item={item} />
      ))}
    </ProjectContainer>
  );
};

const ProjectContainer = styled.div``;
const ProgressContainer = styled.div`
  position: sticky;
  top: 0;
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

const SingleProjectContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
const Wrapper = styled.div`
  max-width: 65rem;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;

  `;
const ImageContainer = styled.div`
  flex: 1;
  height: 50%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const TextContainer = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 30px;

  h2{
    font-size: 3.75rem;
  }

  p{
    color: gray;
    font-size: 1rem;
  }

  button{
    background-color: orange;
    border: none;
    border-radius: 10px;
    padding: 10px;
    width: 10rem;
    cursor: pointer;
  }
`;

export default Projects;
