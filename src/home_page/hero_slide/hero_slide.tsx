import { FC, useState } from "react";
import Slide from "../../slides/slide";
import SlidesController from "../../slides/slides_controller";
import AmbientCube from "./ambient_cube/ambient_cube";
import './hero_slide_styles.scss';

export interface HeroSlideProps {
  slidesController: SlidesController;
}

const HeroSlide: FC<HeroSlideProps> = (props) => {
  function render(): JSX.Element {
    return (
      <Slide
        order={0} 
        builder={(order, ageFactor, alive) => {
          return (
            <div className='hero_slide'>
              <div className="background">
                <AmbientCube className="ambient_cube_0" alive={alive} />
                
                <AmbientCube className="ambient_cube_1" alive={alive} />
              </div>

              <div className="content">
                {/* <img src='https://tunis.ibthemespro.com/img/hero/dark.jpg' /> */}

                <div className='text_area'>
                  <h1 className='title'>
                    <span className='yellow'>I'M YAMIN NATHER.</span>
                    <br/>FULL STACK WEB DEVELOPER                  
                  </h1>

                  <p>
                    I'm an India based full stack developer focused on crafting clean & user‑friendly experiences, 
                    I am passionate about building excellent software that improves the lives of those around me.
                  </p>

                  <button onClick={(e) => props.slidesController.toPage(1)}>MORE ABOUT ME</button>
                </div>
              </div>
            </div>
          );
        }}
      />
    );
  }

  return render();
}


export default HeroSlide;