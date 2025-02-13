import CustomButton from "../CustomButton/CustomButton";
import "./Contacts.scss";

import girl from "../../assets/girl.png";
import zoom from "../../assets/zoom.png";
import { useIsDesktop } from "../../hooks/useIsDesktop";

const Contacts = () => {
  const isDesktop = useIsDesktop();

  return (
    <section className="contacts" id="contacts">
      <div className={`contacts__content ${isDesktop ? 'container' : ''}`}>
        <div className={`contacts__text-section ${isDesktop ? '' : 'container'}`}>
          <h2 className="contacts__title">Nulla ligula at tortor eleifend</h2>
          <p className="contacts__text">
            Phasellus finibus arcu sit amet nibh faucibus, id lacinia lacus
            tincidunt. Proin iaculis risus ut porta accumsan. In volutpat nisl
            varius, lobortis mauris vitae, interdum arcu. Donec in neque libero.
            Proin turpis leo, porta eu justo et, lobortis porttitor dui. Quisque
            interdum, risus vel pretium sollicitudin, enim ipsum tempus neque, a
            dapibus nibh metus a metus.
          </p>
        </div>

        <div className="contacts__images">
          <img className="contacts__image contacts__image--zoom" src={zoom} alt="Zoom image" />
          <img className="contacts__image contacts__image--girl" src={girl} alt="Girl image" />
        </div>

        <div className="contacts__buttons">
          <CustomButton
            paddingX={isDesktop ? "48px" : "100px"}
            paddingY={isDesktop ? "17px" : "12px"}
            onClick={() =>
              console.log('Button "Download" from contacts was cliked')
            }
          />
          <CustomButton
            title="Buy now"
            type="white"
            width={isDesktop ? "" : "272px"}
            paddingX={isDesktop ? "48px" : "100px"}
            paddingY={isDesktop ? "17px" : "12px"}
            onClick={() =>
              console.log('Button "Buy now" from contacts was cliked')
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Contacts;
