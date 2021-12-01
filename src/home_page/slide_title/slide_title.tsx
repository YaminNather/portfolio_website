import { FC } from "react";
import './slide_title_styles.scss';

export interface SlideTitleProps {
  title: string;
  overlay: string;
}

const SlideTitle: FC<SlideTitleProps> = (props) => {
  function render(): JSX.Element {
    return (
      <p className='slide_title'>
        {props.title}
        
        {buildOverlay()}
      </p>
    );
  }

  function buildOverlay() {
    const splitOverlay: string[] = props.overlay.split(" ");
    const lastWord: string = splitOverlay[splitOverlay.length - 1];    

    return (
      <p className='overlay'>
        {props.overlay.replace(` ${lastWord}`, "")} <span className='yellow'> {lastWord}</span>        
      </p>
    );
  }

  return render();
}


export default SlideTitle;