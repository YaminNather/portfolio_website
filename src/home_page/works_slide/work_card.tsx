import { FC } from "react";

export interface WorkCardProps {
  image: string;
  title: string;
  subtitle: string;
  url: string;
}

const WorkCard: FC<WorkCardProps> = (props) => {
  function render(): JSX.Element {
    return (
      <a href={props.url} target="_blank">
        <div className="work_card">
          <img src={props.image} />
          
          <div className="text_area">
            <h2>{props.title.toUpperCase()}</h2>

            <p className="subtitle">{props.subtitle}</p>
          </div>
        </div>
      </a>
    );
  }

  return render();
}


export default WorkCard;