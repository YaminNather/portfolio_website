import { useChangeNotifier } from "change-notifier";
import react, { useContext, useEffect } from "react";
import SlidesController from "./slides_controller";
import * as slides_data from "./slides_data";
import { controllerContext } from "./slides_viewport";
import "./slide_styles.scss";

export interface SlideProps {
  order: number;
  builder: (order: number, ageFactor: number, alive: boolean) => JSX.Element;
  onBirth?: () => void;
  onDeath?: () => void;
}

const useController = ():SlidesController => {
  const controller: SlidesController = useContext<SlidesController | null>(controllerContext) as SlidesController;
  useChangeNotifier(controller);

  return controller;
};

const Slide: react.FC<SlideProps> = (props) => {
  const controller: SlidesController = useController();

  useEffect(
    () => {
      const onPageChange = (currentPage: number, previousPage: number): void => {        
        if(props.onBirth != null && currentPage == props.order)
          props.onBirth();

        if(props.onDeath != null && previousPage == props.order)
          props.onDeath();
      };

      controller.addPageChangeListener(onPageChange);

      return () => controller.removePageChangeListener(onPageChange);
    }    
  );

  useEffect(
    () => {
      if(props.order === 0 && props.onBirth != null)
        props.onBirth();
    },
    [props.order]
  );

  const render = (): JSX.Element => {
    console.log(`CustomLog: Slide ${props.order} rendered`);

    const ageFactor: number = calculateAgeFactor(props.order, controller.scrollFactor);

    return (
      <div className={`slide${(isAlive()) ? '' : '_inactive'}`}>
        {props.builder(props.order, ageFactor, isAlive())}
      </div>
    );
  };

  const isAlive = (): boolean => props.order === controller.getCurrentPage();

  const calculateAgeFactor = (order: number, scrollFactor: number): number => {
    if (scrollFactor < order) 
      return 0;
  
    if (scrollFactor >= order + 1) 
      return 1;
  
    return scrollFactor - order;
  }

  return render();
};

export default Slide;
