import { FC } from "react";
import Slide from "../../slides/slide";
import StackedCarousel from "../../stacked_carousel/stacked_carousel";
import { inverseLerp, lerp } from "../../utils/math_utils";
import AgeIndicator from "../age_indicator/age_indicator";
import ProjectCard from "./project_card/project_card";
import './slide_3_styles.scss';

const Slide3: FC = (props) => {
  function render(): JSX.Element {
    return (
      <Slide
        order={3}
        builder={(order, ageFactor, alive) => {
          return (
            <div className={`slide_3${(alive) ? '' : '_hidden'}`}>
              <p className="heading">Project Showcase</p>

              <div className='projects_carousel_container'>
                <StackedCarousel scrollFactor={lerp(0.0, 3.0, inverseLerp(0.2, 0.8, ageFactor))} inView={4} cardWidth={1100} cardHeight={512} horizontalPadding={128}>
                  <ProjectCard 
                    projectName='eCommerce Website' 
                    image='/project_1.jpg' 
                    programmingLanguages={['NextJS' , 'Javascript', 'HTML', 'SCSS']}
                  />
                  
                  <ProjectCard 
                    projectName='Crypto Price Tracker' 
                    image='/project_0.jpg' 
                    programmingLanguages={['NextJS', 'Javascript', 'HTML', 'SCSS']}
                  />

                  <ProjectCard 
                    projectName='ECommerce Dashboard' 
                    image='https://onix.design/img/work1.png' 
                    programmingLanguages={['Flutter', 'Dart']}
                  />
                  
                  <ProjectCard 
                    projectName='Portfolio :)' 
                    image='https://onix.design/img/work2.png' 
                    programmingLanguages={['React' , 'Javascript', 'HTML', 'SCSS']}
                  />
                </StackedCarousel>
              </div>

              <AgeIndicator className='age_indicator' factor={ageFactor} />
            </div>
          );
        }}
      />
    );
  }

  return render();
}


export default Slide3;