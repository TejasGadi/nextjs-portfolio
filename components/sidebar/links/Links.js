import styled from "styled-components";
import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const items = [
    "Home",
    "Skills",
    "Experience",
    "Projects",
    "Contact",
    "About",
  ];

  return (
    <LinksContainer variants={variants}>
      {items.map((item) => (
        <motion.a
          variants={itemVariants}
          href={`#${item}`}
          key={item}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
        >
          {item}
        </motion.a>
      ))}
    </LinksContainer>
  );
};

const LinksContainer = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  a {
    font-size: 2.5rem;
  }
`;

export default Links;
