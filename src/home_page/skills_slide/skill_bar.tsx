import classNames from "classnames";
import { CSSProperties, FC } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import './skill_bar_styles.scss';

export interface SkillBarProps {
  skillName: string;
  value: number;
  className?: string;
  style?: CSSProperties;
}

const SkillBar: FC<SkillBarProps> = (props) => {
  function render(): JSX.Element {
    return (
      <div className={classNames('skill_bar', props.className)}>
        <div className="svg_container">
          <svg viewBox="0 0 150 150">
            <circle cx="75" cy="75" r="70" />
            
            <circle cx="75" cy="75" r="70" style={{strokeDashoffset: `${440 - 440 * (props.value / 100)}`}} />
          </svg>

          <span className="bar_value">{props.value}%</span>
        </div>

        <p className='value'>{props.skillName}</p>
      </div>
    );
  }

  return render();
}


export default SkillBar;