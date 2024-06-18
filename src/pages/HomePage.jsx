import Navbar from "../components/Navbar";
import CyberonitesLogo from "../img/cyberonites.png";
import Hero from "../components/Hero";
import HeroImage from "../img/Hero.png";
import Alumni from "../components/Alumni";
import Events from "../components/Events";
import AboutUs from "../components/AboutUs";
import Upcoming from "../components/Upcoming";

export default function HomePage() {
  return (
    <>
      <Navbar
        logo={CyberonitesLogo}
        text="Cyberonites A Cyber Security Club Of GLA University"
      />
      <Hero
        image={HeroImage}
        alt="A Boy Listening To Music and Working In The Office"
        tagline="Empowering Students, Protecting "
        special="Cyberspace."
        description="Building the next generation of cyber experts through education and hands-on training. Our university-based club offers workshops, seminars, equipping students with the skills and knowledge to tackle the challenges of the digital world and secure our future."
      />
      <Alumni heading="our alumni work at" />
      <Upcoming />
      <Events />
      <AboutUs />
    </>
  );
}
