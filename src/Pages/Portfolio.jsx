import Hero from "../components/Hero";
import CTA from "../components/CTA";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import MyJourney from "../components/MyJourney";
import SkillsTech from "../components/SkillsTech";

const Portfolio = () => {
  return (
    <>
      <Hero />
      {/* <RecenetWork /> */}
      <MyJourney />
      <SkillsTech />
      <Projects list={3} />
      <CTA />
      <Testimonials />
    </>
  );
};

export default Portfolio;
