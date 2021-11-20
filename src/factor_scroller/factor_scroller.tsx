import React, { FC, useEffect, useRef, useState } from "react";
import './factor_scroller_styles.scss';
import { clamp, lerp, inverseLerp } from '../utils/math_utils';

export interface FactorScrollerProps {
  sensitivity: number;
  scrollSectionsCount: number;
  onScroll: (scrollFactor: number)=>void;
}

const FactorScroller: FC<FactorScrollerProps> = (props) => {
  function getScrollAmountUpperCeiling(): number {
    return props.scrollSectionsCount * props.sensitivity;
  }

  const [scrollAmount, setScrollAmount] = useState<number>(0);

  function clampScrollAmount(scrollAmount: number): number {
    return clamp(scrollAmount, 0.0, getScrollAmountUpperCeiling());
  }

  function getScrollFactor(): number {
    const t: number = inverseLerp(0.0, getScrollAmountUpperCeiling(), scrollAmount);
    
    return lerp(0.0, props.scrollSectionsCount, t);
  }

  useEffect(
    () => {
      props.onScroll(getScrollFactor());
    },
    [scrollAmount]
  );  

  function render(): JSX.Element {
    return (
      <div
        className='factor_scroller'
        onWheel={(ev) => {
          const newScrollAmount: number = clampScrollAmount(scrollAmount + ev.deltaY);

          return setScrollAmount(newScrollAmount);
        }}
      >
        {/* {props.children} */}
      <div className='debug_overlay'>
        <p>Scroll Factor = {getScrollFactor()}</p>
      </div>
      </div>
    );
  } 

  return render();
};

export default FactorScroller;