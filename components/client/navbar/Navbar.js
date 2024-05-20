"use client";
import styled from "styled-components";
import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon, EmailIcon, InstagramIcon } from "next-share";
import Sidebar from "../sidebar/Sidebar";
import Link from "next/link";

const Navbar = ({ socials }) => {
  const linkedin = socials[0].linkedin;
  const github = socials[0].github;
  const email = socials[0].email;

  return (
    <NavBarContainer>
      <Sidebar />
      <Wrapper>
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          TEJAS GADI
        </motion.span>
        <Socials>
          <Link href={linkedin} passHref>
            <a target="_blank" rel="noopener noreferrer">
              <LinkedinIcon size={36} round />
            </a>
          </Link>
          <Link href={github} passHref>
            <a target="_blank" rel="noopener noreferrer">
              <GithubIcon size={36} round />
            </a>
          </Link>
          <Link href={email} passHref>
            <a target="_blank" rel="noopener noreferrer">
              <EmailIcon size={36} round />
            </a>
          </Link>
        </Socials>
      </Wrapper>
    </NavBarContainer>
  );
};

const NavBarContainer = styled.div`
  height: 10vh;
`;
const Wrapper = styled.div`
  max-width: 65rem;
  height: 100%;
  /* background: purple; */
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-weight: bold;
  }
`;
const Socials = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`;

export default Navbar;
