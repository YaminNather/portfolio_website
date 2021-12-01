import { FC } from "react";
import Slide from "../../slides/slide";
import SlideTitle from "../slide_title/slide_title";
import './skills_slide_styles.scss';
import SkillBar from "./skill_bar";

interface Skill {
  readonly name: string;
  readonly experience: number;
}

const skills: Skill[] = [
  { name: "HTML", experience: 85 },
  { name: "CSS", experience: 80 },
  { name: "Firebase", experience: 80 },
  { name: "Javascript", experience: 80 },
  { name: "Typescript", experience: 80 },
  { name: "React", experience: 85 },  
  { name: "Flutter", experience: 90 },
  { name: "Express", experience: 80 },
  { name: "Mongodb", experience: 80 },
];

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
                {skills.map(
                  (value) => (
                    <div className="skill_container">
                      <SkillBar className="skill" value={value.experience} skillName={value.name} />
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