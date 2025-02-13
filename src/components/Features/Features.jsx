import CustomButton from "../CustomButton/CustomButton";
import "./Features.scss";
import { useIsDesktop } from "../../hooks/useIsDesktop";

const Features = () => {
  const isDesktop = useIsDesktop();

  return (
    <section className="features" id="features">
      <div className="features__content container">
        <h1 className="features__title">
          Lorem ipsum dolor sit amet, <span>consectetur</span> adipiscing elit.
        </h1>

        <p className="features__subtitle">
          Sed pellentesque, lectus ut convallis vestibulum, metus urna blandit
          arcu, vitae malesuada tellus augue non diam.
        </p>

        <CustomButton
          title="Downlaod"
          paddingY={isDesktop ? '16px' : '12px'}
          paddingX={isDesktop ? '48px' : '100px'}
          className="features__button"
          onClick={() =>
            console.log("First button on the page (features) clicked")
          }
        />
      </div>
    </section>
  );
};

export default Features;
