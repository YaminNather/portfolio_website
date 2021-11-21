import { FC, MouseEventHandler, useContext, useState } from "react";
import Slide4Data, { slide4DataContext } from "../slide_4_data";
import ExperienceCardDetails, { ExperienceType } from "./experience_card_details";
import './experience_card_styles.scss';

export interface ExperienceCardProps {  
  details: ExperienceCardDetails;
}

const ExperienceCard: FC<ExperienceCardProps> = (props) => {
  const slide4Data: Slide4Data = useContext<Slide4Data | null>(slide4DataContext) as Slide4Data;  

  function render(): JSX.Element {
    return (
      <div className={`experience_card${(selected()) ? '' : '_unfocused'}`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <img src={props.details.image} />
      </div>
    );
  }

  const onMouseEnter: MouseEventHandler<HTMLDivElement> = () => {
    slide4Data.setExperienceType(props.details.experienceType);
  }
  
  const onMouseLeave: MouseEventHandler<HTMLDivElement> = () => {
    slide4Data.setExperienceType(null);
  }

  function selected(): boolean {
    return props.details.experienceType == slide4Data.experienceType;
  }

  return render();
};

export default ExperienceCard;