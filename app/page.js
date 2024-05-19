
import Contact from "@/components/client/contact/Contact";
import Experience from "@/components/client/experience/Experience";
import Hero from "@/components/client/hero/Hero";
import Navbar from "@/components/client/navbar/Navbar";
import Parallax from "@/components/client/parallax/Parallax";
import Projects from "@/components/client/projects/Projects";
import Skills from "@/components/client/skills/Skills";
import { getAbout, getEducation, getExperience, getProjects, getSkills, getSocials } from "@/sanity/sanity.query";
import About from "@/components/client/about/About";

export default async function Home() {
  const experiences = await getExperience();
  const projects = await getProjects();
  const skills = await getSkills();
  const socials = await getSocials();
  const about = await getAbout();
  const education = await getEducation();
  return (
    <div style={{width: "100vw"}}>
      <section id="Home">
        <Navbar socials={socials}/>
        <Hero/>
      </section>
      <About about={about} education={education} socials={socials}/>
      <section id="Experience"><Parallax type="experience"/></section>
      <Experience experience_data = {experiences}/>
      <Skills skills_data={skills}/>
      <section id="Projects"><Parallax type="projects"/></section>
      <Projects projects_data={projects}/>
      <Contact socials={socials}/>
    </div>
  );
}