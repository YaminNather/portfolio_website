import { FC } from "react";

export interface WorkCardProps {
  image: string;
  title: string;
}

const WorkCard: FC<WorkCardProps> = (props) => {
  function render(): JSX.Element {
    return (
      <div className="work_card" style={{backgroundImage: `url("${props.image}")`}}>
        <style>
          {`
            .work_card::after {
              content: "${props.title}"
            }
          `}
        </style>
      </div>
    );
  }

  return render();
}


export default WorkCard;