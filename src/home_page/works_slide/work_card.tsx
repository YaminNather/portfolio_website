import { FC } from "react";

export interface WorkCardProps {
  image: string;
  title: string;
}

const WorkCard: FC<WorkCardProps> = (props) => {
  function render(): JSX.Element {
    return (
      <div className="work_card">
        <img src={props.image} />
        
        <p className="title">
          {props.title.toUpperCase()}
        </p>
      </div>
    );
  }

  return render();
}


export default WorkCard;