import CustomButton from "../CustomButton/CustomButton";
import Tabs from "../Tabs/Tabs";
import "./About.scss";
import { useIsDesktop } from "../../hooks/useIsDesktop";

const About = () => {
  const isDesktop = useIsDesktop(); 

  return (
    <section className="about container" id="about">
      <h2 className="about__title">Aliquam ut libero vel urna rhoncus?</h2>

      <p className="about__subtitle">
        Proin molestie justo at rhoncus ornare. Phasellus vulputate ultrices
        nibh sed lacinia. Etiam dui felis, ultricies vel accumsan iaculis,
        accumsan ac sapien. Suspendisse volutpat ipsum orci, vitae euismod augue
        dapibus quis. Integer felis nisi, semper vel vehicula nec, interdum ut
        felis. Donec sagittis lacinia nulla eget tincidunt.
      </p>

      <div className="about__tabs">
        <Tabs />
      </div>

      <CustomButton
        title="Download"
        className="about__button"
        paddingX="100px"
        paddingY={isDesktop ? "18px" : "13px"}
        onClick={() => console.log("Button under tabs was clicked")}
      />
    </section>
  );
};

export default About;
