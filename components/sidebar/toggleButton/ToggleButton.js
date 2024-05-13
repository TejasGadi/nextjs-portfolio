import styled from "styled-components";
import { motion } from "framer-motion";

const ToggleButton = ({ setOpen }) => {
  return (
    <Button onClick={() => setOpen((prev) => !prev)}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLine="round"
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLine="round"
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: {
              opacity: 0,
            },
          }}
        />
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLine="round"
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </Button>
  );
};

const Button = styled.button`
  z-index: 100;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: fixed;
  top: 25px;
  left: 25px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export default ToggleButton;
