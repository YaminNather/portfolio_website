import { CSSProperties, FC, useContext } from "react";
import StackedCarouselData, { stackedCarouselContext } from "./stacked_carousel_data";
import './card_styles.scss';
import { inverseLerp, lerp } from "../utils/math_utils";

export interface CardProps {
  index: number;  
}

const Card: FC<CardProps> = (props) => {
  const carouselData: StackedCarouselData = useContext<StackedCarouselData | null>(stackedCarouselContext) as StackedCarouselData;  

  const distanceFromScrollFactor = (): number =>  {
    return props.index - carouselData.scrollFactor;
  }

  const cardPosition = (): number[] => {
    let xPosition: number = 0.0;
    if(distanceFromScrollFactor() >= 0.0)
      xPosition = carouselData.horizontalPadding + (distanceFromScrollFactor()*carouselData.offset);
    else {
      const t: number = inverseLerp(0.0, -1.0, distanceFromScrollFactor());
      xPosition = lerp(carouselData.horizontalPadding, carouselData.horizontalPadding - 1000.0, t);
    }

    return [
      xPosition,
      distanceFromScrollFactor()*carouselData.offset
    ];
  };

  const opacity = (): number => {
    const fadeStartPoint: number = -0.8;

    const t: number = inverseLerp(fadeStartPoint, -1.0, distanceFromScrollFactor());
    return (distanceFromScrollFactor() < fadeStartPoint) ? lerp(1.0, 0.0, t) : 1.0;
  };

  function render(): JSX.Element {
    const style: CSSProperties = {
      zIndex: 100 - props.index, left: `${cardPosition()[0]}px`, top: `${cardPosition()[1]}px`,
      width: carouselData.cardWidth, height: carouselData.cardHeight,
      opacity: opacity()
    };

    return (
      <div className='stacked_carousel_card' style={style}>
        {props.children}

        {/* <p className='debug_screen'>{props.index}</p> */}
      </div>
    );
  }

  return render();
};

export default Card;