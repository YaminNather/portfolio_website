import { FC } from "react";
import './project_card_styles.scss';

export interface ProjectCardProps {
  image: string;
  projectName: string;
  programmingLanguages: string[];
}

const ProjectCard: FC<ProjectCardProps> = (props) => {
  function render(): JSX.Element {
    return (
      <div className='project_card'>
        <img src={props.image} alt='image' />

        {buildProgrammingLanguages()}

        <p className='project_name'>{props.projectName}</p>
      </div>
    );
  }

  function buildProgrammingLanguages(): JSX.Element {
    return (
      <div className='programming_languages'>
        {props.programmingLanguages.map(
          (value, index) => (<span key={index}>{value}</span>)
        )}
      </div>
    );
  }

  return render();
};

export default ProjectCard;