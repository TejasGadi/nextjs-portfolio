"use client"
import styled from "styled-components";
import ToggleButton from "./toggleButton/ToggleButton";
import Links from "./links/Links";
import { motion } from "framer-motion";
import { useState } from "react";

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    overflow: "hidden",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 50,
    },
  },
};

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <SideBarContainer initial="closed" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </SideBarContainer>
  );
};

const SideBarContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: black;
  color: black;

  .bg {
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 25rem;
    background: white;
  }
`;

export default Sidebar;
