"use client";

import Contact from "@/components/contact/Contact";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import Parallax from "@/components/parallax/Parallax";
import Projects from "@/components/projects/Projects";
import Timeline from "@/components/timeline/Timeline";
import styled from "styled-components";

export default function Home() {
  return (
    <Container>
      <section id="Home">
        <Navbar />
        <Hero/>
      </section>
      <section id="Skills"><Parallax type="skills"/></section>
      <section>Skills</section>
      <section id="Experience">Experience</section>
      <section id="Projects"><Parallax type="projects"/></section>
      <Projects/>
      <section id="Contact">
        <Contact/>
      </section>
      <section id="About">About</section>
      <Timeline/>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  section {
    height: 100vh;
  }
`;
