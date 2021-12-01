import { FC } from "react";
import Slide from "../../slides/slide";
import SlideTitle from "../slide_title/slide_title";
import ContactForm from "./contact_form";
import ContactInfoArea from "./contact_info_area";

import "./contact_me_slide_styles.scss";

const ContactMeSlide: FC = (props) => {
  function render(): JSX.Element {
    return (
      <Slide 
        order={4}
        builder={(order, ageFactor, alive) => {
          return (
            <div className="contact_me_slide">
              <SlideTitle title="CONTACT" overlay="GET IN TOUCH" />

              <div className="content">
                <ContactInfoArea />

                <ContactForm />
              </div>
            </div>
          );
        }}
      />      
    );
  }

  return render();
}


export default ContactMeSlide;