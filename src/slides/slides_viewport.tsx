import classNames from "classnames";
import react, { CSSProperties } from "react";
import { clamp } from "../utils/math_utils";
import * as slides_data from "./slides_data";
import "./slides_viewport_styles.scss";

export interface SlidesViewportProps {
  sensitivity: number;
  className?: string;
  style?: CSSProperties;
}

const SlidesViewport: react.FC<SlidesViewportProps> = (props) => {
  const [scrollAmount, setScrollAmount] = react.useState<number>(0.0);
  const [previousScrollAmount, setPreviousScrollAmount] = react.useState<number>(0.0);

  react.useEffect(
    () => {
      function onWheelEvent(ev: WheelEvent) {
        let deltaScroll: number = ev.deltaX + ev.deltaY;

        if (deltaScroll === 0.0)
          return;        
        
        setPreviousScrollAmount(scrollAmount);
        
        let newScrollAmount: number = scrollAmount + deltaScroll;
        newScrollAmount = clamp(newScrollAmount, 0.0, react.Children.count(props.children) * props.sensitivity);
        setScrollAmount(newScrollAmount);
      }

      window.addEventListener("wheel", onWheelEvent);

      return () => window.removeEventListener("wheel", onWheelEvent);
    }
  );

  function render(): JSX.Element {
    const previousScrollFactor: number = clampScrollFactor(
      previousScrollAmount / props.sensitivity
    );
    const scrollFactor: number = clampScrollFactor(
      scrollAmount / props.sensitivity
    );

    return (
      <div className={classNames("slides_viewport", props.className)} style={props.style}>
        <slides_data.context.Provider
          value={{
            previousScrollFactor: previousScrollFactor,
            scrollFactor: scrollFactor,
            slidesCount: react.Children.count(props.children)
          }}
        >
          {props.children}
        </slides_data.context.Provider>

        <div className='scroll_factor'>
          Scroll Factor = {scrollFactor}
        </div>
      </div>
    );
  }
  
  function clampScrollFactor(value: number): number {
    return clamp(value, 0.0, react.Children.count(props.children));
  }

  return render();
};

export default SlidesViewport;
