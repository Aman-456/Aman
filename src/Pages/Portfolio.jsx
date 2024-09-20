import Hero from "../components/Hero/Hero";
import CTA from "../components/CTA/CTA";
import Projects from "../components/Projects/Projects";
import Testimonials from "../components/Testimonials/Testimonials";
import MyJourney from "../components/MyJourney/Myjourney";
import SkillsTech from "../components/SkillsTech/SkillsTech";

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
