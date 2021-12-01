import { FC } from "react";
import './contact_me_slide_styles.scss';

const ContactForm: FC = (props) => {
  function render(): JSX.Element {
    return (
      <div className='contact_form'>
        <div className='first_row'>
          <input placeholder="YOUR NAME" />
          
          <input placeholder="YOUR EMAIL" />
        </div>
        
        <input placeholder="YOUR SUBJECT" />
        
        <textarea rows={6} placeholder="YOUR MESSAGE" />

        <button>SEND</button>
      </div>
    );
  }

  return render();
}


export default ContactForm;