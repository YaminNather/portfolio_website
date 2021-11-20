import { FC, useEffect, useState } from "react";
import Slide from "../../slides/slide";
import StripReveal from "../../strip_reveal/strip_reveal";
import StripRevealController from "../../strip_reveal/strip_reveal_controller";
import AgeIndicator from "../age_indicator/age_indicator";
import './slide_1_styles.scss';

const Slide1: FC = (props) => {
  const stripReveal: StripRevealController = useState<StripRevealController>(new StripRevealController())[0];
  const [alive, setAlive] = useState<boolean>(false);

  useEffect(
    () => {
      if(alive === true)
        stripReveal.animate();
      else
        stripReveal.cancelAnimation();
    },
    [alive, stripReveal]
  );

  function render(): JSX.Element {
    return (
      <Slide 
        order={1}
        onBirth={() => setAlive(true)}
        onDeath={() => setAlive(false)}
        builder={(order, ageFactor) => {
          return (
            <div className={`slide_1${(alive) ? '': '_hidden'}`}>
              <div className="left_area">
                <StripReveal controller={stripReveal}>
                  <p className="heading">About Me</p>
                </StripReveal>

                <p className="details">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                  
                  <br /><br />
                  
                  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                  <br /><br />
                  
                  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
              </div>

              <StripReveal controller={stripReveal}>
                <img 
                  src={'https://images.unsplash.com/photo-1519713958759-6254243c4a53?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'} 
                  alt='Personal Pic'
                />
              </StripReveal>

              <AgeIndicator className='age_indicator' factor={ageFactor} />
            </div>
          );
        }}
      />
    );
  }

  return render();
}


export default Slide1;