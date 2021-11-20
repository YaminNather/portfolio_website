import { FC } from "react";
import { Canvas } from "@react-three/fiber";
import Slide from "../../slides/slide";
import './slide_2_styles.scss';
import ThreeJScene from "./threejs_scene";

const Slide2: FC = (props) => {
  function render(): JSX.Element {
    return (
      <Slide
        order={2} 
        builder={(_, ageFactor, alive) => {
          return (
            <div className={`slide_2${(alive) ? '' : '_hidden'}`}>
              <p className='heading'>Experience</p>

              <Canvas className="threejs_scene">
                <ThreeJScene />
              </Canvas>

              <div className="age_indicator" style={{width: `${ageFactor * 100}%`}} />
            </div>
          );
        }}
      />
    );
  }

  return render();
}

export default Slide2;