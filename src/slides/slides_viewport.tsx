import { useChangeNotifier } from "change-notifier";
import classNames from "classnames";
import { Children, Context, createContext, CSSProperties, FC, useEffect, useState } from "react";
import SlidesController from "./slides_controller";
import "./slides_viewport_styles.scss";

export interface SlidesViewportProps {
  sensitivity: number;
  className?: string;
  style?: CSSProperties;
  controller: SlidesController;
}

const SlidesViewport: FC<SlidesViewportProps> = (props) => {  
  useChangeNotifier(props.controller);  

  useEffect(
    () => {
      return props.controller.updateValuesFromComponent(Children.count(props.children), props.sensitivity);
    },
    [props]
  );


  function render(): JSX.Element {
    return (
      <div 
        className={classNames("slides_viewport", props.className)} 
        style={props.style} 
        // onWheel={(ev) => props.controller.onScrolled(ev.deltaX, ev.deltaY)}
      >
        <controllerContext.Provider value={props.controller}>
          {props.children}
        </controllerContext.Provider>

        {/* <div className='scroll_factor'>
          Scroll Factor = {props.controller.scrollFactor}
        </div> */}
      </div>
    );
  }

  return render();
};

export const controllerContext: Context<SlidesController | null> = createContext<SlidesController | null>(null);

export default SlidesViewport;
