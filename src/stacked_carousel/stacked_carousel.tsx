import React, { CSSProperties, FC, MutableRefObject, ReactNode, RefObject, useContext, useEffect, useLayoutEffect, useRef, useState } from "react";
import FactorScroller from "../factor_scroller/factor_scroller";
import StackedCarouselData, { stackedCarouselContext } from "./stacked_carousel_data";
import './stacked_carousel_styles.scss';
import classNames from 'classnames';
import Card from "./card";

function useReRenderOnFirstRender(): void {
  const [version, setVersion] = useState<number>(0);

  useEffect(
    () => {      
      setVersion(version + 1);
    },
    []
  );
}

function useReRenderOnWindowResize(): void {
  const [version, setVersion] = useState<number>(0);

  useEffect(
    () => {
      function onResize(): void {
        setVersion(version + 1);
      }

      window.addEventListener('resize', onResize);

      return () => {
        return window.removeEventListener('resize', onResize);
      };
    }
  );
}

function useStartCardIndex(previousScrollFactor: number, scrollFactor: number): number {
  const [startCardIndex, setStartCardIndex] = useState<number>(0);
  
  useEffect(
    () => {
      console.log(`CustomLog: startCardIndex changing to ${startCardIndex}`);
    },
    [startCardIndex]
  );

  useEffect(
    () => {
      if(Math.trunc(previousScrollFactor) === Math.trunc(scrollFactor))
        return;
            
      setStartCardIndex(Math.trunc(scrollFactor));
    },
    [previousScrollFactor, scrollFactor]
  );

  return startCardIndex;
}

export interface StackedCarouselProps {
  cardWidth: number;
  cardHeight: number;
  inView: number;  
  horizontalPadding: number;
  className?: string;
  style?: CSSProperties;
  scrollFactor: number;
}

const StackedCarousel: FC<StackedCarouselProps> = (props) => {
  const [previousScrollFactor, setPreviousScrollFactor] = useState<number>(0);
  const [scrollFactor, setScrollFactor] = useState<number>(0);
  const startCardIndex: number = useStartCardIndex(previousScrollFactor, scrollFactor);
  const divRef = useRef<HTMLDivElement>(null);

  useReRenderOnFirstRender();
  useReRenderOnWindowResize();

  useEffect(
    () => {
      setPreviousScrollFactor(scrollFactor);
      setScrollFactor(props.scrollFactor);
    },
    [props.scrollFactor]
  );

  function cardsCount(): number {
    return React.Children.count(props.children);
  }

  function width(): number {
    if(divRef.current == null)
      return 0.0;

    return divRef.current.offsetWidth;
  }  

  function offset(): number {
    return (width() - props.cardWidth - 2*props.horizontalPadding)/(cardsCount() - 1);
  }

  function height(): number {
    return props.cardHeight + offset() * (cardsCount() - 1);
  }

  function getProvidedData(): StackedCarouselData {
    return {
      scrollFactor: scrollFactor, 
      horizontalPadding: props.horizontalPadding ?? 32,
      width: (divRef.current != null) ? divRef.current.offsetWidth : 0.0,
      offset: offset(),
      height: height(),
      cardWidth: props.cardWidth,
      cardHeight: props.cardHeight
    };
  }

  function getSelectedCards(): ReactNode[] {
    const childrenArray: ReactNode[] = React.Children.toArray(props.children);

    const r: ReactNode[] = [];
    for(let i: number = 0, j: number = startCardIndex % cardsCount(); i < props.inView;) {
      r.push(childrenArray[j]);

      i++;

      if(j + 1 <= childrenArray.length - 1)
        j += 1;
      else
        break;
    }

    return r;
  }

  function render(): JSX.Element {
    return (            
      <div
        ref={divRef}
        className={classNames('stacked_carousel', props.className)}
        style={{height: height(), ...props.style}}        
      >
        <stackedCarouselContext.Provider value={getProvidedData()}>
          {getSelectedCards().map(            
            (child, index) => <Card index={startCardIndex + index}>{child}</Card>
          )}
        </stackedCarouselContext.Provider>        
      </div>      
    );
  }   

  return render();
};

export default StackedCarousel;