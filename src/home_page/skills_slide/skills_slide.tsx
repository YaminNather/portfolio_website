import { FC } from "react";
import Slide from "../../slides/slide";
import SlideTitle from "../slide_title/slide_title";
import './skills_slide_styles.scss';
import SkillBar from "./skill_bar";

const SkillsSlide: FC = (props) => {
  function render(): JSX.Element {
    return (
      <Slide
      order={2} 
        builder={(order, ageFactor, alive) => {
          return (
            <div className='skills_slide'>
              <SlideTitle title="EXPERIENCE" overlay="MY SKILLS" />

              <div className='skills'>                
                {new Array(8).fill(0).map(
                  (value) => (
                    <div className="skill_container">
                      <SkillBar className="skill" value={80} skillName="HTML" />
                    </div>
                  )
                )}
              </div>
            </div>
          );
        }}
      />
    );
  }

  return render();
}


export default SkillsSlide;