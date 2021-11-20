import { FC, useEffect, useState } from 'react';
import AmbientCube from './ambient_cube/ambient_cube';
import './slide_0_styles.scss';
import Slide from '../../slides/slide';
import AgeIndicator from '../age_indicator/age_indicator';

const Slide0: FC = () => {
  const mouseDistanceFromCenter: number[] = useMouseDistanceFromCenter();
  const [alive, setAlive] = useState<boolean>(false);

  useEffect(
    () => {
      console.log(`CustomLog: Slide0 alive? ${alive}`);
    },
    [alive]
  );

  function render(): JSX.Element {
    return (
      <Slide
        order={0}
        onBirth={() => setAlive(true)}
        onDeath={() => setAlive(false)}
        builder={(_, ageFactor) => {
          return (
            <div className={`slide_0${(alive) ? '' : '_hidden'}`}>
              <div 
                className="content" 
                style={{transform: `translate(${mouseDistanceFromCenter[0] * 64}px, ${mouseDistanceFromCenter[1] * 64}px)`}}
              >
                <p className="greeting">Hi, I'm Yamin!</p>
                
                <p className="heading">
                  Something about me <br />
                  that sounds <br />
                  Awesome and Cool
                </p>
  
                {buildIcons()}
              </div>
  
              <div 
                className="inverter" 
                style={{transform: `translate(${mouseDistanceFromCenter[0] * 24}px, ${mouseDistanceFromCenter[1] * 24}px)`}}
              >
                <AmbientCube className={"ambient_cube_0"} alive={alive} />
                
                <AmbientCube className={"ambient_cube_1"} alive={alive} />
              </div>
  
              <AgeIndicator factor={ageFactor} className='age_indicator' />
            </div>
          );
        }}
      />
    );
  }

  function buildIcons(): JSX.Element {
    const iconURLs: string[] = [
      'https://cdn-icons-png.flaticon.com/512/1384/1384017.png',
      "https://cdn-icons-png.flaticon.com/512/61/61109.png",
      "https://www.svgrepo.com/show/17588/mail.svg",
      "https://cdn-icons-png.flaticon.com/512/1384/1384031.png",
      'https://cdn-icons-png.flaticon.com/512/1384/1384005.png'
    ];

    return (
      <div className="icons">
        {iconURLs.map((value, index) => <img className='icon' src={value} key={index} />)}
      </div>
    );
  }

  return render();
};

function useMouseDistanceFromCenter(): number[] {
  const [mouseDistanceFromCenter, setMouseDistanceFromCenter] = useState<number[]>([0.0, 0.0]);

  useEffect(
    () => {
      const onMouseMove = (e: MouseEvent): void => {
        setMouseDistanceFromCenter([e.x - window.innerWidth / 2.0, e.y - window.innerHeight / 2.0]);
      };
      window.addEventListener('mousemove', onMouseMove);
      
      return () => window.removeEventListener('mousemove', onMouseMove);
    }
  );

  return [mouseDistanceFromCenter[0] / (window.innerWidth/2), mouseDistanceFromCenter[1] / (window.innerHeight/2)];
}

export default Slide0;