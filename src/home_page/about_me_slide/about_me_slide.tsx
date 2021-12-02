import { FC } from "react";
import Slide from "../../slides/slide";
import SlideTitle from "../slide_title/slide_title";
import './about_me_slide_styles.scss';

const AboutMeSlide: FC = (props) => {
  function render(): JSX.Element {
    return (
      <Slide
      order={1} 
        builder={(order, ageFactor, alive) => {
          return (
            <div className='about_me_slide'>
              <SlideTitle title='RESUME' overlay="ABOUT ME" />

              <div className='content'>
                <div className='personal_info'>
                  <span className='heading'>PERSONAL INFO</span>

                  <div className='items'>
                    <div className='item'>
                      <span className='label'>First Name:</span> <span className='value'>Yamin</span>                                        
                    </div>
                    
                    <div className='item'>
                      <span className='label'>Last Name:</span> <span className='value'>Nather</span>                                        
                    </div>
                    
                    <div className='item'>
                      <span className='label'>Age:</span> <span className='value'>21</span>
                    </div>
                    
                    <div className='item'>
                      <span className='label'>Languages:</span> <span className='value'>English, Tamil</span>
                    </div>

                    <div className='item'>
                      <span className='label'>Nationality:</span> <span className='value'>India</span>                                        
                    </div>
                    
                    <div className='item'>
                      <span className='label'>Location:</span> <span className='value'>Theni, Tamil Nadu</span>                                        
                    </div>
                    
                    <div className='item'>
                      <span className='label'>Phone:</span> <span className='value'>+91 7598385116</span>                                        
                    </div>                                  
                    
                    <div className='item'>
                      <span className='label'>Email:</span> <span className='value'>2001s.yn@gmail.com</span>                                        
                    </div>
                  </div>

                  {/* <button>Download CV</button> */}
                </div>

                <img src='/about_me/location.png' />
              </div>
            </div>
          );
        }}
      />
    );
  }

  return render();
}


export default AboutMeSlide;