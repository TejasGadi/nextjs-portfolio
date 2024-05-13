import styled from 'styled-components';
import { motion } from 'framer-motion';
import {GithubIcon, LinkedinIcon, EmailIcon, InstagramIcon } from 'next-share';
import Sidebar from '../sidebar/Sidebar';

const Navbar = () => {
  return (
    <NavBarContainer>
      <Sidebar/>
      <Wrapper>
        <motion.span
            initial={{opacity: 0, scale: 0.5}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration:0.5}}
        >TEJAS GADI</motion.span>
        <Socials>
            <a href=""><EmailIcon size={36} round/></a>
            <a href=""><GithubIcon size={36} round/></a>
            <a href=""><LinkedinIcon size={36} round/></a>
            <a href=""><InstagramIcon size={36} round/></a>
        </Socials>
      </Wrapper>
    </NavBarContainer>
  )
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

    span{
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
