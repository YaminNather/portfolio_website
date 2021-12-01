import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope, faMapMarker, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import './contact_me_slide_styles.scss';

const ContactInfoArea: FC = (props) => {
  function render(): JSX.Element {
    return (
      <div className="contact_info_area">
        <p className="description_title">DONT BE SHY!</p>

        <p className="description">
          Feel feel free to get in touch with me. I am always open
          to discussing new projects, creating ideas or opportunities
          to be part of your visions.
        </p>

        <div className="contact_info_items">
          {buildContactItems(faMapMarker, "ADDRESS", "14-4-2, Old Hospital Street, Uthamapalayam, Theni - 625533")}
          
          {buildContactItems(faEnvelope, "MAIL ME", "2001s.yn@gmail.com")}
          
          {buildContactItems(faPhoneAlt, "Phone Number", "+91 7598385116")}
        </div>
      </div>
    );
  }

  function buildContactItems(leading: IconProp, title: string, subtitle: string): JSX.Element {
    return (
      <div className='item'>
        <FontAwesomeIcon className="leading" icon={leading} />

        <div className="text_area">
          <p className="title">{title}</p>

          <p className="subtitle">{subtitle}</p>
        </div>
      </div>
    );
  }

  return render();
}


export default ContactInfoArea;