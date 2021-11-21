import { FC, useState } from "react";
import Slide from "../../slides/slide";
import AgeIndicator from "../age_indicator/age_indicator";
import ExperienceCard from "./experience_card/experience_card";
import { experienceDetails, ExperienceType } from "./experience_card/experience_card_details";
import { slide4DataContext } from "./slide_4_data";
import './slide_4_styles.scss';

const Slide4: FC = (props) => {
  const [experienceType, setSelectedExperienceType] = useState<ExperienceType | null>(null);

  function render(): JSX.Element {
    return (
      <Slide
        order={2}
        builder={(order, ageFactor, alive) => {
          return (
            <div className={`slide_4${(alive) ? '':'_hidden'}`}>
              <p className='heading'>Experience</p>

              <div className='experience_cards'>
                <slide4DataContext.Provider value={{experienceType: experienceType, setExperienceType: setSelectedExperienceType}}>
                  {experienceDetails.map(
                    (value, index) => (
                      <ExperienceCard details={value} />
                    )
                  )}
                </slide4DataContext.Provider>
              </div>

              <div className='focused_category_name_container'>
                <span className='focused_category_name'>{(experienceType != null) ? experienceType + 's' : ''}</span>
              </div>

              <AgeIndicator className='age_indicator' factor={ageFactor} />
            </div>
          );
        }}
      />
    );
  }

  return render();
};

export default Slide4;