import { FC } from "react";
import Slide from "../../slides/slide";
import SlideTitle from "../slide_title/slide_title";
import './works_slide_styles.scss';
import WorkCard from "./work_card";

const WorksSlide: FC = (props) => {
  function render(): JSX.Element {
    return (
      <Slide
      order={3} 
        builder={(order, ageFactor, alive) => {
          return (
            <div className='works_slide'>
             <SlideTitle title="WORKS" overlay="MY PORTFOLIO" />
              
              <div className="works">
                {new Array(3).fill(0).map(
                  (value) => <WorkCard title="eCommerce Website" image="https://tunis.ibthemespro.com/img/projects/project-2.jpg" />)
                }
              </div>
            </div>
          );
        }}
      />
    );
  }

  return render();
}


export default WorksSlide;